import React, { useState } from "react";

import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  const [state, setstate] = useState(true);

  const toggleCheck = () => {
    console.log(state);
    setstate(!state);
  };
  let lineStyle = {
    textDecorationLine: "none",
    color: "white",
    marginLeft: 15,
    fontSize: 16
  };
  if (!state) lineStyle.textDecorationLine = "line-through";
  return (
    <View style={styles.item}>
      <MaterialIcons
        name="delete"
        size={25}
        color="#fff"
        onPress={() => pressHandler(item.key)}
      />
      <Text onPress={() => toggleCheck()} style={lineStyle}>
        {item.text}
      </Text>

      {/* <Text style={styles.delete} onPress={() => pressHandler(item.key)}>
        Delete
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 20,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10
  },
  delete: {
    backgroundColor: "#f7accf",
    color: "#392759",
    width: 70,
    padding: 6,
    textAlign: "center",
    borderRadius: 2,
    marginLeft: 10,
    marginTop: 2
  }
});
