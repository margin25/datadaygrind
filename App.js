import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ width: 50, height: 120, backgroundColor: "#C3E49E" }} />
      <Image
        source={require("./assets/logo.png")}
        style={{
          height: 90,
          width: 350,
          resizeMode: "stretch",
          borderTopWidth: 50,
          borderColor: "#C3E49E",
        }}
      />
      <View style={{ width: 50, height: 20, backgroundColor: "C3E49E" }} />
      <Image
        source={require("./assets/brain.png")}
        style={{
          height: 120,
          width: 150,
          resizeMode: "stretch",
          borderTopWidth: 50,
          borderColor: "#C3E49E",
        }}
      />
      <View style={{ padding: 10 }} />
      <TextInput
        placeholder="  Enter your name."
        style={{ width: 230, height: 50, borderColor: "gray", borderWidth: 3 }}
        onChangeText={(text) => onChangeText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 100 }} />
      <View style={{ width: 50, height: 20, backgroundColor: "#C3E49E" }} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Button is pressed.")}
      >
        <Text style={{ padding: 5, fontSize: 17 }}>Lets get started.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3E49E",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F1B899",
    width: 200,
    height: 50,
    padding: 10,
  },
});
