import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Alert, TouchableOpacity, TextInput, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState("")

  const [todos, setTodos] = useState([])

  const onPressItemDelete = (key) => {
    console.log("key", key)
    const newTodos = todos.filter((item) => item.key !== key)
    console.log("newTodos", newTodos)
    setTodos(newTodos)
  }

  const onChangeText = (value) => {
    setText(value)
  }

  const onPressButton = () => {
    // const newTodos = todos.push("text")
    const newTodos = [...todos, {
      name: text,
      key: Math.random().toString(),
    }]
    setText("")
    setTodos(newTodos)
    console.log("newTodos", newTodos)
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.items}>
        <Text style={styles.itemsName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteView}
          onPress={() => onPressItemDelete(item.key)}
        >
          <Text style={styles.deleteText}>削除</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoリスト</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={onChangeText}
      />
      <View style={styles.button}>
        <Button
          title="決定"
          color="red"
          onPress={onPressButton}
        />
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 80,
    marginBottom: 20,
    color: "purple",
  },
  textInput: {
    height: 40,
    width: 300,
    padding: 10,
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 20,
  },
  button:{
    marginBottom: 20,
  },
  items: {
    width: 300,
    backgroundColor: "purple",
    marginBottom: 30,
    alignItems: "center",
    padding: 10,
  },
  itemsName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  deleteView: {
    width: 50,
    backgroundColor: "gray"
  },
  deleteText: {
    color: "#fff",
    textAlign: "center",
  },
});

/* import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
       <View style={styles.black} />
       <View style={styles.white} />
      </View>
      <View style={styles.view2} />
      <View style={styles.view3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view1: {
    flex: 2,
    backgroundColor: 'blue',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
  },
  black: {
    width: 100,
    height: 100,
    backgroundColor: "#000",
  },
  white: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
  },
  view2: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  view3: {
    flex: 1,
    backgroundColor: 'red',
  },
}); */