import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import { AuthSession } from "expo";

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

      <TouchableOpacity style={styles.button} onPress={() => submitTodo(text)}>
        <Text style={styles.buttontext}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "#eef4ed",
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontFamily: "Acme",
    fontSize: 16
  },
  button: {
    color: "#eef4ed",
    backgroundColor: "#e5e5e5",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderColor: "#fca311",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10
  },
  buttontext: {
    fontFamily: "Acme",
    fontSize: 18,
    letterSpacing: 1,
    color: "#000000"
  }
});
