import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

import { StyleSheet, Text, View, Platform } from "react-native";
import HomeScreen from "./HomeScreen";
import Grade from "./Grade";
import { datas } from "./data";
import EditScreen from "./EditScreen";
import ResultScreen from "./ResultScreen";
import InfoScreen from "./InfoScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [data, setData] = useState(datas);
  const [value, setValue] = useState("");
  const [course, setCourse] = useState("jjj");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" data={data} component={HomeScreen} />
        <Stack.Screen
          name="Grade"
          options={{ setData: setData }}
          component={Grade}
        />
        <Stack.Screen
          name="EditScreen"
          options={{ setData: setData }}
          component={EditScreen}
        />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
