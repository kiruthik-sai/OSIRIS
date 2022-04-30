// In App.js in a new project

import * as React from "react";
import { View, Text,LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
import SignupScreen from "./screen/SignupScreen";
import BottomNav from "./screen/BottomNav";
import Splash from "./screen/Splash";
import ViewLogs from "./screen/ViewLogs";
import Logs from "./screen/Logs";
// import './App.css';
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                
                <Stack.Screen name="Splash" component={Splash} />

                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="BottomNav" component={BottomNav} />

                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Logs" component={Logs} />
                <Stack.Screen name="ViewLogs" component={ViewLogs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
