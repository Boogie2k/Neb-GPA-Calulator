import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InfoScreen() {
  return (
    <SafeAreaView style={styles.info}>
      <Text style={{ fontWeight: "bold", fontSize: 16, color: "dodgerblue" }}>
        Oghosa Benjamin
      </Text>
      <View style={styles.infoView}>
        <Text style={{ marginRight: 5, color: "dodgerblue" }}>
          oghosabenjamin@gmail.com
        </Text>
        <Text style={{ marginRight: 5, color: "dodgerblue" }}>
          Tel: +2348115713631
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  info: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoView: {
    flexDirection: "row",
    marginTop: 10,
  },
});
