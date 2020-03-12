import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Today's ToDo's</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 24,
    backgroundColor: "#392759"
  },
  text: {
    color: "white",
    fontSize: 23,
    textAlign: "center"
  }
});
