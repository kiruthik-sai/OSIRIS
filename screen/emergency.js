import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Constants from "expo-constants";
// import icons from 'react-native-vector-icons'

// You can import from local files

// or any pure javascript modules available in npm
import { Card, Button } from "react-native-paper";

export default function Emergency() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                EMERGENCY CARD <Image source={require("../assets/p1.png")} />{" "}
            </Text>
            <Card style={{borderRadius:10,marginBottom:100}}>
                <Text style={styles.text}>
                    
                    <Image source={require("../assets/p0.png")} />{" "}
                    <Text style={styles.button}> Name: Sarina Malkova </Text>{" "}
                </Text>
                <Text style={styles.text}>
                    
                    <Image source={require("../assets/p2.png")} />{" "}
                    <Text style={styles.button}> Blood Type: AB1+ </Text>{" "}
                </Text>
                <Text style={styles.text}>
                    
                    <Image source={require("../assets/p3.png")} />{" "}
                    <Text style={styles.button}> Allergies: Dairy </Text>{" "}
                </Text>
                <Text style={styles.text}>
                   
                    <Image source={require("../assets/p4.png")} />{" "}
                    <Text style={styles.button}> Medications: Astaphanine </Text>{" "}
                </Text>
                <Text style={styles.text}>
                    
                    <Image source={require("../assets/p5.png")} />{" "}
                    <Text style={styles.button}> 3218 Winter St </Text>{" "}
                </Text>
                <Text style={styles.text}>
                   
                    <Image source={require("../assets/p6.png")} />{" "}
                    <Text style={styles.button}> Organ Donor: Yes </Text>{" "}
                </Text>
                <Text style={styles.text}>
                    
                    <Image source={require("../assets/p7.png")} />{" "}
                    <Text style={styles.button}> 267-547-2301 </Text>{" "}
                </Text>

               
            </Card>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#F0574D", //BACKGROUND COLOR FOR ENTIRE SCREEN
        padding: 8,
        borderRadius:15,
        // width: 200,
        
    },
    paragraph: {
        margin: 24,
        fontSize: 27, // HEADING "EMERGENCY CARD" SIZE
        fontWeight: "800",
        //   fontFamily:'Baloo',
        textAlign: "center",
        flexDirection: "row",
        color: "white",
    },
    text: {
        margin: 25,
        fontSize: 20, // OTHER INFO FONT SIZE
        textAlign: "left",
        borderRadius: 25,

        
    },
    button: {

        padding: 1,
        borderRadius:15,
        marginBottom:7,
        justifyContent: "center",
        alignItems: "center",
        fontFamily:"monospace",
      fontWeight:"bold",
        fontSize: 15, // OTHER INFO FONT SIZE
        textAlign: "left",
    },
});
