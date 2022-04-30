import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    Alert,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../database/firebase";
import { database } from "../database/firebaseRealtime";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const ViewLogs = () => {
    const navigation = useNavigation();
    const uid = auth.currentUser.uid;
    const [logs, setLogs] = useState([]);
    useEffect(() => {
        database
            .ref("Users")
            .child(uid)
            .child("logs")
            .on("value", (snapshot) => {
                console.log("val", snapshot.val());
                let temp = [];
                for (let key in snapshot.val()) {
                    console.log("hello key", key);
                    //setLogs([...logs,snapshot.val()[key]])
                    temp.push(snapshot.val()[key]);
                }
                setLogs(temp);
            });
    }, []);

    useEffect(() => {
        console.log("logs", logs.length, logs);
    }, [logs]);

    const itemRender = (item) => (
        <View style={styles.border}>
            <Text style={styles.medicine}>Medicine: {item.item.medicine}</Text>
            <Text style={styles.medicine}>NumPills: {item.item.numPills}</Text>
            {/* <Button
                onPress={() => {
                    navigation.navigate("Logs", item.item);
                }}
                title="Update"
                color="#841584"
                accessibilityLabel="Click to update"
            /> */}

            <TouchableOpacity
                style={styles.uprm}
                onPress={() => {
                    navigation.navigate("Logs", item.item);
                }}
            >
                <Text style={styles.uprmText}>Update</Text>
            </TouchableOpacity>
            {/* <Button
                onPress={() => {
                    database
                        .ref("Users")
                        .child(uid)
                        .child("logs")
                        .child(item.item.id)
                        .remove(() => {
                            Alert.alert("Log Removed");
                        });
                }}
                title="Remove"
                color="#841584"
                accessibilityLabel="Click to remove"
            /> */}
            <TouchableOpacity
                style={styles.uprm}
                onPress={() => {
                    database
                        .ref("Users")
                        .child(uid)
                        .child("logs")
                        .child(item.item.id)
                        .remove(() => {
                            Alert.alert("Log Removed");
                        });
                }}
            >
                <Text style={styles.uprmText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.main}>
            <FlatList data={logs} renderItem={itemRender} />
            {/* <Button
                onPress={()=>{
                    console.log('going to add logs')
                    navigation.navigate('Logs')
                }}
                title="Add Logs"
                color="#841584"
                accessibilityLabel="Click to add logs"
            /> */}

            <TouchableOpacity
                style={styles.addLogs}
                onPress={() => {
                    console.log("going to add logs");
                    navigation.navigate("Logs");
                }}
            >
                <Text style={styles.addLogsText}>Add Logs</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        padding: "20%",
        alignItems: "center",
        marginBottom:100,
        // backgroundColor: "#ece9f7",
        
    },
    uprm: {
        padding: 10,
        margin: 5,
        backgroundColor: "#841584",
        borderRadius: 20,
    },
    uprmText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    medicine: {
        fontFamily: "monospace",
        margin: 5,
    },
    addLogs: {
        padding: 13,
        margin: 10,
        backgroundColor: "#AEAFF7",
        borderRadius: 20,
    },
    addLogsText: {
        fontSize: 25,
        fontWeight: "bold",
        padding: 7,
        color: "white",
        textAlign: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    border: {
        backgroundColor: "#fce0c7",
        padding: 25,
        borderWidth: 0.4,
        borderRadius: 10,
        // borderWidth: 2,
        margin: 5,
    },
});

export default ViewLogs;
