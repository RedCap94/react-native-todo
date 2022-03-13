import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, TextInput, FlatList } from "react-native";

import { splash } from "./assets/splash.png"
import SingleToDo from "./components/SingleToDo";



const App = () => {


    const [todo, setToDo] = useState("");
    const [todos, setToDos] = useState([]);

    const handleToDo = () => {
        if (!todo) return;

        setToDos([...todos, { id: Date.now(), text: todo }]);
        setToDo("");

    }

    return (
        <View style={styles.container}>
            <StatusBar styles="auto"></StatusBar>
            <Text style={styles.heading}>To-Do Memories</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="What's new to remember?"
                    onChangeText={(text) => setToDo(text)}
                    value={todo}
                ></TextInput>
                <TouchableOpacity
                    onPress={handleToDo}
                    style={styles.button}><Text style={styles.buttonText}>Pin</Text></TouchableOpacity>
            </View>

            <View style={styles.todoSpace}>
            <Text style={styles.heading2}>Your Pinned Memories</Text>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={todos}
                    renderItem={({ item }) => 
                        <SingleToDo
                            todo={item}
                            todos={todos}
                            setToDo={setToDos}
                        />
                    }

                />
            </View>

        </View>
    );
};
export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#5edbc0",
        padding: 20
    },
    heading: {
        fontSize: 40,
        marginVertical: 30,
        fontWeight: "bold",
        color: "#333"
    },
    
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",

        //    backgroundColor:"#ff0"
    },
    inputText: {
        backgroundColor: "#fff",
        borderRadius: 50,
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1
    },
    button: {
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: "#333",
        marginLeft: 15,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10
    },
    buttonText: {
        color: "#fff"
    },
    todoSpace: {
        width: "100%",
        marginTop: 50,
        paddingVertical: 20,
        borderTopWidth: 0.5,
        borderTopColor: "#333"
    },
    heading2:{
        fontSize: 25,
        fontWeight: "700",
        color: "#333",
        textAlign: "center",
        marginVertical: 20
    },
});