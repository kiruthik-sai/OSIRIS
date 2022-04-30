import {
    View,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import {
    useFonts,
    AlegreyaSans_100Thin,
    AlegreyaSans_100Thin_Italic,
    AlegreyaSans_300Light,
    AlegreyaSans_300Light_Italic,
    AlegreyaSans_400Regular,
    AlegreyaSans_400Regular_Italic,
    AlegreyaSans_500Medium,
    AlegreyaSans_500Medium_Italic,
    AlegreyaSans_700Bold,
    AlegreyaSans_700Bold_Italic,
    AlegreyaSans_800ExtraBold,
    AlegreyaSans_800ExtraBold_Italic,
    AlegreyaSans_900Black,
    AlegreyaSans_900Black_Italic,
} from "@expo-google-fonts/alegreya-sans";
import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
const Splash = () => {
    let [fontsLoaded] = useFonts({
        AlegreyaSans_100Thin,
        AlegreyaSans_100Thin_Italic,
        AlegreyaSans_300Light,
        AlegreyaSans_300Light_Italic,
        AlegreyaSans_400Regular,
        AlegreyaSans_400Regular_Italic,
        AlegreyaSans_500Medium,
        AlegreyaSans_500Medium_Italic,
        AlegreyaSans_700Bold,
        AlegreyaSans_700Bold_Italic,
        AlegreyaSans_800ExtraBold,
        AlegreyaSans_800ExtraBold_Italic,
        AlegreyaSans_900Black,
        AlegreyaSans_900Black_Italic,
    });
    const navigation = useNavigation();

    const mainLogo = require("../assets/projectLogo.png");
    const purpleBG = require("../assets/splashP.png");
    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <>
                <ImageBackground
                    source={purpleBG}
                    resizeMode="cover"
                    style={styles.BG}
                >
                    <Text style={styles.head}>It's Okay, We got this!</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                            style={styles.signupButton}
                        >
                            <Text style={[styles.buttonText]}>
                                Let Us Help You
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </>
        );
    }
};

export default Splash;

const primaryColor = "#f7c89e";
const secondaryColor = "#8969ff";
const loginButtonColor = "#f24ea8";
const signupButtonColor = "#FF7D87";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    head: {
        position: "absolute",
        width: 197,
        height: 108,
        left: "25%",
        top: 79,

        fontFamily: "AlegreyaSans_700Bold_Italic",

        fontSize: 41,

        textAlign: "center",

        color: "#FAFAFA",
    },
    logoBox: {
        flex: 1,
    },
    mainLogo: {
        width: 100,
        height: 100,
        marginTop: "25%",
        borderRadius: 25,
        borderWidth: 0.1,
        borderColor: "grey",
    },
    boxMain: {
        flex: 2,
        position: "absolute",
        backgroundColor: secondaryColor,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        paddingTop: 15,
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },
    BG: {
        flex: 1,
        justifyContent: "center",
    },
    inputContainer: {
        width: "90%",
        backgroundColor: secondaryColor,
    },
    input: {
        color: "black",
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 20,
        width: "100%",
        fontSize: 15,
        fontFamily: "monospace",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 40,
        flexDirection: "row",
        width: 400,
        height: 350,
        // position: "absolute",
        // left: "5.05%",
        // right: "58.87%",
        // top: '180.53%',
        // bottom: '-99.2%',
    },
    errorText: {
        color: "red",
        fontWeight: "700",
        marginTop: 5,
    },
    loginText: {
        color: "#3740FE",
        marginTop: 25,
        textAlign: "center",
    },
    signupButton: {
        backgroundColor: "#371B34",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,

        position: "absolute",
        width: 300,
        height: 70,
        top: 450,
        // bottom: '-99.2%',
        // margin: 10,
        padding: 10,
        borderRadius: 15,
        // alignItems: "center",
    },
    loginButton: {
        backgroundColor: loginButtonColor,
        width: 100,
        margin: 10,
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#0782F9",
        borderWidth: 2,
    },
    buttonText: {
        color: "white",
        fontSize: 25,
        fontFamily: "AlegreyaSans_500Medium",
    },
    buttonOutlineText: {
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 16,
    },
});
