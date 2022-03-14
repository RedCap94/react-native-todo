import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SingleToDo({ todo, todos, setToDos }) {

    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    useEffect(()=> {
        AsyncStorage.setItem("todos",JSON.stringify)
    },[todos]);

    const editTodo = () => {
        if (!edit)
            setEdit(true);
        else {

            setToDos(
                todos.map((i) =>
                    i.id === todo.id
                        ? {
                            id: i.id,
                            text: editText,
                            status: i.status
                        }
                        : i
                )
            );
            AsyncStorageorage.setItem("todos",JSON.stringify);
            setEdit(false);
        }
    }

    const doneTodo = () => {
        if (edit)
            setEdit(false);
        setToDos(
            todos.map((i) =>
                i.id === todo.id
                    ? {
                        id: i.id,
                        text: i.text,
                        status: "done"
                    }
                    : i
            )
        );
    }

    const deleteTodo = (id) => {
        setToDos(
            todos.filter((i) =>
                i.id !== id
            )
        );
    }


    return (
        <View style={styles.todo}>

            {
                (!edit) ?
                    <Text style={styles.todoView}>{todo.text}</Text>
                    : <TextInput multiline={true} style={styles.editText} placeholder="What's new to remember?" autoFocus={true} value={editText} onChangeText={(text) => setEditText(text)} ></TextInput>
            }


            <View style={styles.iconTray}>
                <TouchableOpacity style={styles.iconBt}>
                    <MaterialCommunityIcons onPress={editTodo} style={styles.icons} color={(edit)?"#d1af00":"#333"} name="circle-edit-outline" size={27} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBt}>
                    <MaterialCommunityIcons onPress={() => deleteTodo(todo.id)} style={styles.icons} name="delete-circle-outline" size={27} color="#b84e39" />
                </TouchableOpacity>

                {
                    todo.status === "new"
                        ? (
                            <TouchableOpacity style={styles.iconBt}>
                                <Feather onPress={doneTodo} style={styles.icons} name="check-circle" size={27} color="green" />
                            </TouchableOpacity>
                        )
                        : <AntDesign style={styles.iconBt} name="checkcircle" size={27} color="#19bf64" />


                }


            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    todo: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "#ebf2fc",
        borderRadius: 50,
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconBt: {
        marginLeft: 10
    },
    iconTray: {
        flexDirection: "row"
    },
    todoView: {
        color: "#333", 
        fontWeight: "400", 
        fontSize: 22.5,
        flex: 0.9,
    },
    editText: {
        borderBottomColor: "#333",
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 21,
        color: "#333"
    }
})