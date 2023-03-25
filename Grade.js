import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

import Select from "@redmin_delishaj/react-native-select";
import { datas } from "./data";

const Grade = ({ navigation, route }) => {
  const { data, setData } = route.params;
  const [selectedItem, setSelectedItem] = useState("A");

  const [value, setValue] = useState("1");
  const [courseCode, setCourseCode] = useState("enter course code");

  const [isSelectedItem, setIsSelectedItem] = useState(false);
  const grade = [
    { text: "A", value: "A" },
    { text: "B", value: "B" },
    { text: "C", value: "C" },
    { text: "D", value: "D" },
    { text: "E", value: "E" },
    { text: "F", value: "F" },
  ];
  const config = {
    fontSize: 18,
    backgroundColor: "white",
    textColor: "black",
    selectedBackgroundColor: "black",
    selectedTextColor: "white",
    selectedFontWeight: "bold",
  };

  let x;
  if (selectedItem === "A") {
    x = 5;
  } else if (selectedItem === "B") {
    x = 4;
  } else if (selectedItem === "C") {
    x = 3;
  } else if (selectedItem === "D") {
    x = 2;
  } else if (selectedItem === "E") {
    x = 1;
  } else if (selectedItem === "F") {
    x = 0;
  }

  let points = x * value;

  let handleSave = () => {
    if (!selectedItem) {
      setIsSelectedItem(true);
    }

    selectedItem &&
      setData([
        ...data,
        {
          course: courseCode,
          unit: value,
          grade: selectedItem,
          points: x * value,
          id: new Date().getTime(),
        },
      ]);

    selectedItem && navigation.goBack();
  };

  useEffect(() => {
    if (isSelectedItem) {
      setTimeout(() => {
        setIsSelectedItem(false);
      }, 2500);
    }
  });

  return (
    <View>
      <View style={styles.course}>
        <Text style={styles.courseText}>course code :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter course code"
          onChangeText={(newText) => setCourseCode(newText)}
          defaultValue={courseCode}
        />
      </View>
      <View style={styles.unit}>
        <Text style={[styles.unitText]}>Unit :</Text>
        <TextInput
          style={[styles.unitInput]}
          placeholder="unit"
          keyboardType="number-pad"
          onChangeText={(newText) => {
            setValue(Number(newText.replace(/[^0-9]/g, "")));
          }}
          defaultValue={value}
        />
      </View>
      <View style={styles.unit}>
        <Text style={[styles.unitText, { paddingTop: 15 }]}>Grade :</Text>

        <Select
          style={styles.unitInput}
          data={grade}
          onSelect={(text) => setSelectedItem(text)}
          value={selectedItem}
          config={config}
          width="55%"
          zIndex={-1}
          placeholder={selectedItem}
        />
      </View>
      <View style={styles.points}>
        <Text style={[styles.unitText]}>Points :</Text>
        <Text style={{ width: "55%", fontSize: 20 }}>
          {selectedItem ? points : ""}
        </Text>
      </View>

      {isSelectedItem && (
        <Text
          style={{
            color: "white",
            backgroundColor: "dodgerblue",
            textAlign: "center",
            zIndex: -1,
          }}
        >
          Grade cannot be empty
        </Text>
      )}

      <Pressable
        onPress={handleSave}
        style={[
          {
            marginTop: 45,
            backgroundColor: "dodgerblue",
            width: 60,
            height: 50,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 15,
          },
          styles.save,
        ]}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: 10,
            fontSize: 17,
          }}
        >
          Save
        </Text>
      </Pressable>
    </View>
  );
};

export default Grade;

const styles = StyleSheet.create({
  course: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },
  courseText: {
    fontSize: 16,
    width: "35%",
    textAlign: "center",
    color: "dodgerblue",
  },
  input: {
    color: "black",
    height: 40,
    width: "55%",
  },
  unit: {
    flexDirection: "row",
    justifyContent: "space-evenly",

    marginBottom: 10,
  },
  unitText: {
    fontSize: 16,
    color: "dodgerblue",
    width: "35%",
    textAlign: "center",
  },
  unitInput: {
    width: "55%",
  },

  points: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: "22",
    zIndex: -1,
    marginTop: 25,
  },

  save: {
    zIndex: -2,
  },
});
