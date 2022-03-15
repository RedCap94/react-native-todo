import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, TextInput, FlatList, ScrollView } from "react-native";

import { splash } from "./assets/splash.png"
import SingleToDo from "./components/SingleToDo";



const App = () => {


    const [todo, setToDo] = useState("");
    const [todos, setToDos] = useState([]);


    const handleToDo = () => {
        if (!todo) return;

        setToDos([...todos, { id: Date.now(), text: todo, status: "new" }]);
        setToDo("");

    }

    const fetchTodos = async () => {
        const data = await AsyncStorage.getItem("todos");
        if (data)
            setToDos(JSON.parse(data));
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (

        <View style={styles.container}>
            <StatusBar styles="auto"></StatusBar>
            <Text style={styles.heading}>To-Do / Not To-Do</Text>
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

            <ScrollView style={styles.todoSpace}>
                <View>
                    <Text style={styles.heading2}>Your Pinned To-Do Memories</Text>
                    {
                        todos.length != 0 ?
                            (
                                // <FlatList
                                //     scrollEnabled={false}
                                //     style={styles.listView}
                                //     keyExtractor={(item) => item.id.toString()}
                                //     data={todos}
                                //     renderItem={({ item }) =>
                                //         <SingleToDo
                                //             todo={item}
                                //             todos={todos}
                                //             setToDos={setToDos}
                                //         />
                                //     }

                                // />
                                <View style={styles.listView}>
                                    {
                                        todos.map((item) => {
                                            return (
                                                <View key={item.id}>
        
                                                    <SingleToDo
                                                        todo={item}
                                                        todos={todos}
                                                        setToDos={setToDos}
                                                    />
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            )
                            :
                            (
                                <Text style={styles.blurText}>None yet</Text>
                            )
                    }
                </View>


            </ScrollView>

        </View>



    );
};
export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#5edbc0",
        padding: 20,
        paddingBottom: 10
    },
    heading: {
        fontSize: 35,
        marginVertical: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#333"
    },
    blurText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: 2,
        textAlign: "center",
        marginVertical: 20
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
        borderTopColor: "#333",
    },
    heading2: {
        fontSize: 25,
        fontWeight: "700",
        color: "#333",
        textAlign: "center",
        marginVertical: 20
    },
    listView: {
        paddingVertical: 20
    }
});