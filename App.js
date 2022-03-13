import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, TextInput } from "react-native";

import {splash} from "./assets/splash.png"

const App = () => {
    return(
        <View style={styles.container}>
            <StatusBar styles="auto"></StatusBar>
            <Text style={styles.heading}>To-Do Memories App</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}  placeholder="What's new to remember?"></TextInput>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Pin</Text></TouchableOpacity>
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
       inputContainer:{
           flexDirection: "row",
           alignItems: "center",

        //    backgroundColor:"#ff0"
       },
       inputText:{
           backgroundColor: "#fff",
           borderRadius: 50,
           fontSize: 18,
           paddingVertical: 10,
           paddingHorizontal: 20,
           flex: 1
       },
       button:{
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: "#333",
        marginLeft: 15,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10
       },
       buttonText: {
           color: "#fff"
       }
});