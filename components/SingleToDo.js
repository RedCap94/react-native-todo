import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SingleToDo({ todo }) {
    return (
        <View style={styles.todo}>
            <Text style={{ color: "#333", fontWeight: "400", fontSize: 20 }}>{todo.text}</Text>
            <View style={styles.iconTray}>
                <TouchableOpacity style={styles.iconBt}>
                    <MaterialCommunityIcons style={styles.icons} name="circle-edit-outline" size={25} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBt}>
                    <MaterialCommunityIcons style={styles.icons} name="delete-circle-outline" size={25} color="#333" />
                </TouchableOpacity>
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
    iconTray:{
        flexDirection: "row"
    }
})