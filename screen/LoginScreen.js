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

import React, { useEffect, useState } from "react";
import { auth } from "../database/firebase";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Logged in with:", user.email);
                navigation.navigate("BottomNav", { screen: "Home" });
            })
            .catch((error) => setError(error.code));
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("BottomNav", { screen: "Home" });
            }
        });
        return unsubscribe;
    }, []);

    const mainLogo = require("../assets/projectLogo.png");
    const purpleBG = require("../assets/purpleBG.jpg");

    return (
        <>
            <ImageBackground
                source={purpleBG}
                resizeMode="cover"
                style={styles.BG}
            >
                <KeyboardAvoidingView style={styles.container}>
                    <View style={styles.logoBox}>
                        <Image
                            source={mainLogo}
                            style={styles.mainLogo}
                        ></Image>
                    </View>
                    <View style={styles.boxMain}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={"#666666"}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                style={styles.input}
                            />

                            <TextInput
                                placeholder="Password"
                                placeholderTextColor={"#666666"}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                style={styles.input}
                                secureTextEntry
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Signup")}
                                style={styles.signupButton}
                            >
                                <Text style={[styles.buttonTextSignup]}>SignUp</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={handleLogin}
                                style={styles.loginButton}
                            >
                                <Text style={[styles.buttonTextLogin]}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </>
    );
};

export default LoginScreen;

const primaryColor = "#f7c89e";
const secondaryColor = "#00CC76";
const loginButtonColor = "#DCBC99";
const signupButtonColor = "#badede";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: primaryColor,
    },
    logoBox: {
        flex: 1,
    },
    mainLogo: {
        width: 100,
        height: 100,
        marginTop: "25%",
        borderRadius: 25,
        // borderWidth: 0.1,
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
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        flexDirection: "row",
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
        backgroundColor: signupButtonColor,
        width: 100,
        margin: 10,
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
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
    buttonTextLogin: {
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    buttonTextSignup: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
    buttonOutlineText: {
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 16,
    },
});
