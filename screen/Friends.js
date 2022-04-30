import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    TextInput,
    FlatList,
} from "react-native";
import call from "react-native-phone-call";
import { TouchableWithoutFeedback } from "react-native-web";

const purpleBG = require("../assets/splash.png");
function callNum() {
    console.log("");
}
export default class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    icon: "https://www.logolynx.com/images/logolynx/e4/e493682d1174c7c32bee35af528cd9f9.jpeg",
                    description: "Emergency",
                    color: "#fc6060",
                    border: "#0036fa",
                    baroderRad: 3,
                    number: "911",
                },
                {
                    id: 2,
                    icon: "https://www.logolynx.com/images/logolynx/f5/f5bf4ac9e90d7cbc303dd832d946c5b1.png",
                    description: "Med-Helpline",
                    color: "#B9E6E7",
                    border: "#00fa21",
                    baroderRad: 3,
                    number: "8887152609",
                },
                {
                    id: 3,
                    icon: "https://bootdey.com/img/Content/avatar/avatar3.png",
                    description: "Akhil",
                    color: "#dedede",
                    number: "1254856369",
                },
                {
                    id: 4,
                    icon: "https://bootdey.com/img/Content/avatar/avatar5.png",
                    description: "Mir Balaach",
                    color: "#dedede",
                    number: "2158694521",
                },
            ],
        };
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    {" "}
                    <Image source={require("../assets/call2.png")} /> EMERGENCY
                    CONTACTS{" "}
                </Text>
                <View style={styles.formContent}>
                    <Image
                        style={[styles.icon, styles.inputIcon]}
                        source={{
                            uri: "https://png.icons8.com/search/androidL/100/000000",
                        }}
                    />
                </View>

                <FlatList
                    style={styles.notificationList}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={[
                                    styles.notificationBox,
                                    {
                                        backgroundColor: item.color,
                                        borderColor: item.border,
                                        borderWidth: item.baroderRad,
                                    },
                                ]}
                            >
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.icon }}
                                />

                                <Text
                                    style={styles.name}
                                    onPress={() =>
                                        call({
                                            number: item.number,
                                            prompt: false,
                                        }).catch(console.error)
                                    }
                                >
                                    {item.description}: {item.number}
                                </Text>
                            </View>
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8fff5",
    },
    paragraph: {
        marginTop: 60,
        fontSize: 24, // HEADING "EMERGENCY CARD" SIZE
        fontWeight: "800",

        //   fontFamily:'Baloo',
        textAlign: "center",
        flexDirection: "row",
        color: "#F14D42",
    },
    formContent: {
        flexDirection: "row",
        marginTop: 0,
    },

    icon: {
        width: 30,
        height: 30,
    },
    iconBtnSearch: {
        alignSelf: "center",
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: "#FFFFFF",
        flex: 1,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: "center",
    },
    notificationList: {
        marginTop: 20,
        padding: 10,
    },
    notificationBox: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 10,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 20,
    },
    name: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#000000",
        marginLeft: 10,
        alignSelf: "center",
    },
});

// import * as React from "react";
// import { Text, View, StyleSheet, Image, FlatList } from "react-native";
// import Constants from "expo-constants";
// import icons from "react-native-vector-icons";

// // You can import from local files

// // or any pure javascript modules available in npm
// import { Card, Button } from "react-native-paper";

// export default function Friends() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.paragraph}>
//                 {" "}
//                 <Image source={require("../assets/call2.png")} /> EMERGENCY
//                 CONTACTS{" "}
//             </Text>
//             <FlatList
//                 data={[
//                     { key: "Devin \n 3314 Winter St" },
//                     { key: "Dan \n 3218 Powelton St" },
//                     { key: "Dominic \n 3605 Pearl St" },
//                     { key: "Jackson \n 3405  Market St" },
//                     { key: "James \n XYZ" },
//                     { key: "Joel \n XYZ" },
//                     { key: "John \n XYZ" },
//                     { key: "Jillian \n ABC" },
//                     { key: "Jimmy \n ABC" },
//                     { key: "Julie \n ABC" },
//                 ]}
//                 renderItem={({ item }) => (
//                     <Card style={styles.button}>
//                         <Image source={require("../assets/pfp.png")} />
//                         <Text style={styles.text}> {item.key}</Text>
//                     </Card>
//                 )}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         paddingTop: Constants.statusBarHeight,
//         backgroundColor: "#FFFFFF", //BACKGROUND COLOR FOR ENTIRE SCREEN
//         padding: 2,
//     },
//     paragraph: {
//         margin: 24,
//         fontSize: 24, // HEADING "EMERGENCY CARD" SIZE
//         fontWeight: "800",
//         //   fontFamily:'Baloo',
//         textAlign: "center",
//         flexDirection: "row",
//         color: "#F14D42",
//     },
//     text: {
//         position: "absolute",
//         margin: 5,
//         fontSize: 22, // OTHER INFO FONT SIZE
//         fontWeight: "500",
//         textAlign: "left",
//         flexDirection: "row",
//         marginLeft: 60,
//     },
//     button: {
//         width: 375,
//         height: 60,
//         borderRadius: 85 / 2,
//         backgroundColor: "rgba(222, 232, 235, 1)",

//         shadowColor: "black",
//         shadowRadius: 8,
//         shadowOpacity: 0.12,
//         opacity: 0.9,
//         // zIndex: 10,
//         margin: 0,
//         marginTop: 25,
//         marginLeft: 8,
//         // OTHER INFO FONT SIZE
//         textAlign: "center",
//         display: "flex",
//         flexDirection: "row",
//         flexWrap: "wrap",
//         justifyContent:"flex-start" ,
//         alignItems: "stretch",
//         alignContent: "stretch",
//     },
// });
