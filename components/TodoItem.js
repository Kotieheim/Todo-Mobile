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
    color: "#e5e5e5",
    marginLeft: 15,
    fontSize: 18,
    fontFamily: "Acme",
    letterSpacing: 0.7
  };
  if (!state) lineStyle.textDecorationLine = "line-through";
  return (
    <View style={styles.item}>
      <MaterialIcons
        name="delete"
        size={25}
        color="#fca311"
        onPress={() => pressHandler(item.key)}
      />
      <Text onPress={() => toggleCheck()} style={lineStyle}>
        {item.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 20,
    marginTop: 16,
    borderColor: "#fca311",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10
  }
});
