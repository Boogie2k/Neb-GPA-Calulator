import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { datas } from "./data";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const [isAlert, setIsALert] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  /*   const [add, setAdd] = useState(""); */

  let sum = 0;
  let totalUnits = 0;

  data &&
    data.map((item) => {
      return (sum += Number(item.points));
    });
  data &&
    data.map((item) => {
      return (totalUnits += Number(item.unit));
    });
  let divider;

  if (data) {
    divider = data.length;
  }

  return (
    <SafeAreaView style={styles.safeareaview}>
      {isInfo &&
        Alert.alert(
          "NEB GPA CALCULATOR",
          `This mobile application is for schools using the 5.0 Grade Point scale. This app was developed by NebTech Technologies
    
Help:
- Click on the '+' button to add new result item
- Long-click on a result item to delete the result item 
- click 'reset' to delete all result items
- click 'calculate' to show full result details
- click on a result item to edit the result details
    
Thanks for using this app

NebTech Tecnologies`,
          [
            {
              text: "CONTACT",
              onPress: () => {
                setIsInfo(false);
                navigation.navigate("InfoScreen");
              },
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                setIsInfo(false);
              },
              style: "cancel",
            },
          ],
          {
            cancelable: true,
            onDismiss: () => setIsInfo(false),
          }
        )}
      {isAlert &&
        Alert.alert(
          "No result",
          "Result is empty",
          [
            {
              text: "Cancel",
              onPress: () => setIsALert(false),
              style: "cancel",
            },
          ],
          {
            cancelable: true,
            onDismiss: () => setIsALert(false),
          }
        )}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setData([]);
          }}
        >
          <Text
            style={{
              backgroundColor: "dodgerblue",
              color: "white",
              borderRadius: 15,
              paddingLeft: 8,
              paddingRight: 8,
              fontSize: 16,
            }}
          >
            Reset
          </Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => {
            setIsInfo(true);
          }}
        >
          <Text
            style={{
              color: "dodgerblue",
              borderRadius: 15,
              paddingLeft: 8,
              paddingRight: 8,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            ⓘ
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        {data &&
          data.map((item) => {
            return (
              item.grade && (
                <Pressable
                  onPress={() => {
                    navigation.navigate("EditScreen", { item, data, setData });
                  }}
                  onLongPress={() => {
                    Alert.alert(
                      "DELETE",
                      "Do you want to delete this?",
                      [
                        {
                          text: "Yes",
                          onPress: () => {
                            const newData = data.filter(
                              (d) => d.id !== item.id
                            );
                            setData(newData);
                          },
                          style: "cancel",
                        },
                        {
                          text: "No",

                          style: "cancel",
                        },
                      ],
                      {
                        cancelable: true,
                      }
                    );
                  }}
                >
                  <View style={styles.courseRow} key={item.id}>
                    <Text
                      style={[
                        styles.courseRowText,
                        {
                          textAlign: "left",

                          width: "40%",
                        },
                      ]}
                    >
                      {item.course}
                    </Text>
                    <Text style={styles.courseRowText}>{item.grade}</Text>
                    <Text style={styles.courseRowText}>{item.unit}</Text>
                    <Text style={styles.courseRowText}>{item.points}</Text>
                  </View>
                </Pressable>
              )
            );
          })}
        {/*   <Button
          onPress={() => {
            setData([...data, { unit: value }]);
          }}
          title="new"
        />
 */}
        {/*  <Text>{sum}</Text> */}
      </ScrollView>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          navigation.navigate("Grade", { name: "grade", data, setData });
        }}
      >
        <Text style={styles.add}>+</Text>
      </Pressable>
      <TouchableHighlight
        onPress={() => {
          if (data.length < 1) {
            setIsALert(true);
          }
          data.length > 0 &&
            navigation.navigate("ResultScreen", {
              courses: data.length,
              points: sum,
              totalUnits,
            });
        }}
        style={styles.calc}
      >
        <Text style={styles.calcText}>calculate</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeareaview: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    flex: 1,
  },

  pressable: {
    backgroundColor: "dodgerblue",
    borderRadius: 50,
    elevation: 20,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    top: 25,
    left: 300,
    zIndex: 1,
  },
  calc: {
    backgroundColor: "dodgerblue",
    /*  position: "absolute",
    top: 0,
    left: 0,
    bottom: -10,
    right: 0, */
    height: 40,

    /*  flex: 0.1, */
  },
  add: {
    width: 50,
    height: 50,
    fontSize: 36,
    textAlign: "center",
    color: "white",
  },

  calcText: {
    textAlign: "center",
    fontSize: 26,
    color: "white",
  },

  courseRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "dodgerblue",
    paddingBottom: 20,
    marginBottom: 9,
  },
  courseRowText: {
    color: "white",
    textTransform: "uppercase",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 5,
    alignItems: "center",
  },
});
