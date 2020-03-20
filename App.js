import React, { useState } from "react";
// import { uuid } from "uuidv4";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Alert
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy toilet-paper", key: "1" },
    { text: "realize its all gone", key: "2" },
    { text: "panic", key: "3" }
  ]);
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitTodo = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        "Something Happened!",
        "Todos must be over 3 characters long",
        [{ text: "Ok", onPress: () => console.log("alert closed") }]
      );
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitTodo={submitTodo} />
        <View style={styles.list}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 8 }}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem pressHandler={pressHandler} item={item} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
let { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7a5c61"
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
