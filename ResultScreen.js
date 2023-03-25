import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ResultScreen = ({ navigation, route }) => {
  const { courses, points, totalUnits } = route.params;

  let gp = points / totalUnits;

  let gradePoint;
  if (gp % 2 === 0) {
    gradePoint = gp + ".00";
  } else {
    gradePoint = gp.toFixed(2);
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <View style={styles.content}>
          <Text style={styles.contentDetails}>Total courses</Text>
          <Text style={styles.text}>{courses}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentDetails}>Total units</Text>
          <Text style={styles.text}>{totalUnits}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentDetails}>Total points</Text>
          <Text style={styles.text}>{points}</Text>
        </View>
      </View>
      <View
        style={[
          styles.gpView,
          {
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text style={[styles.contentDetails]}>Your Grade Point is : </Text>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          {gp ? gradePoint : `0.00`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    marginRight: 15,
  },
  text: { textAlign: "center", fontSize: 16, fontWeight: "bold" },
  contentDetails: {
    color: "dodgerblue",
    fontSize: 18,
  },
  gpView: {
    flexDirection: "row",
    marginTop: 50,
  },
});
