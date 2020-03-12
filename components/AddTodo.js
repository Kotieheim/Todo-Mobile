import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function AddTodo({ submitTodo }) {
  const [text, setText] = useState("");
  const changeInput = val => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={changeInput}
      />
      <Button
        onPress={() => submitTodo(text)}
        title="add todo"
        color="#392759"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "white",
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
