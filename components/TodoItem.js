import React, { useState } from "react";

import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { AuthSession } from "expo";

export default function TodoItem({ item, pressHandler }) {
  const [state, setstate] = useState(true);

  const toggleCheck = () => {
    console.log(state);
    setstate(!state);
  };
  let lineStyle = {
    textDecorationLine: "none",
    backgroundColor: "white",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10
  };
  if (!state) lineStyle.textDecorationLine = "line-through";
  return (
    <View>
      <Text onPress={() => toggleCheck()} style={lineStyle}>
        {item.text}
      </Text>
      <Text
        style={{
          backgroundColor: "#f7accf",
          color: "#392759",
          width: 70,
          padding: 6,
          textAlign: "center",
          borderRadius: 2,
          marginLeft: 107,
          marginTop: 2
        }}
        onPress={() => pressHandler(item.key)}
      >
        Delete
      </Text>
    </View>
  );
}
