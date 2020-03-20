import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  // Function used to handle deleting of todos.
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  // Validation for submitting ToDos, for example the todo must bit 4 or more characters.
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

  async function loadResourcesAsync() {
    await Promise.all([
      Font.loadAsync({
        Acme: require("./assets/Acme-Regular.ttf")
      })
    ]);
  }
  function handleLoadingError(error) {
    console.warn(error);
  }
  function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
  }

  const [todos, setTodos] = useState([
    { text: "buy toilet-paper", key: "1" },
    { text: "realize its all gone", key: "2" },
    { text: "panic", key: "3" }
  ]);
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  console.log(isLoadingComplete);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
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
    </TouchableWithoutFeedback>
  );
}
let { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14213d"
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,

    marginTop: 20
  }
});
