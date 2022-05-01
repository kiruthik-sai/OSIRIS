import {
	View,
	Text,
	StyleSheet,
	TextInput,
	ScrollView,
	TouchableOpacity,
    ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { database } from "../database/firebaseRealtime";
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
const CropRecommendation = () => {
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
	const [nitrogen, setNitrogen] = useState(0);
	const [pottasium, setPottasium] = useState(0);
	const [phosphorus, setPhosphorus] = useState(0);
	const [temperature, setTemperature] = useState(0);
	const [humidity, setHumidity] = useState(0);
	const [ph, setPh] = useState(0);
	const [rainfall, setRainfall] = useState(0);
	const [code, setCode] = useState("");
	const [crop, setCrop] = useState(null);
    const cropBG = require("../assets/cropBG.jpg");

	useEffect(() => {
		console.log("useEffect", rainfall, temperature, humidity);
	}, [rainfall, temperature, humidity]);
	if (!fontsLoaded) {
		return null;
	} else {
        console.log("fonts",fontsLoaded)
		return ( <>
        <ImageBackground
            source={cropBG}
            resizeMode="cover"
            style={styles.BG}
        >
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.title}>Crop Recommendation</Text>
				<View style={styles.boxMain}>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							onChangeText={setNitrogen}
							value={nitrogen}
							placeholder="Nitrogen"
							keyboardType="numeric"
						/>
						<TextInput
							style={styles.input}
							onChangeText={setPottasium}
							value={pottasium}
							placeholder="Pottasium"
							keyboardType="numeric"
						/>
						<TextInput
							style={styles.input}
							onChangeText={setPhosphorus}
							value={phosphorus}
							placeholder="Phosphorus"
							keyboardType="numeric"
						/>
						<TextInput
							style={styles.input}
							onChangeText={setTemperature}
							value={temperature}
							placeholder="Temperature"
							keyboardType="numeric"
						/>
						<TextInput
							style={styles.input}
							onChangeText={setHumidity}
							value={humidity}
							placeholder="Humidity"
							keyboardType="numeric"
						/>
						<TextInput
							style={styles.input}
							onChangeText={setPh}
							value={ph}
							placeholder="pH"
							keyboardType="numeric"
						/>
						<TextInput
							style={styles.input}
							onChangeText={setRainfall}
							value={rainfall}
							placeholder="Rainfall"
							keyboardType="numeric"
						/>
						<TouchableOpacity
							onPress={() => {
								let arr = [
									nitrogen,
									phosphorus,
									pottasium,
									temperature,
									humidity,
									ph,
									rainfall,
								];
								let url = "http://10.0.0.59:8080/crop";
								console.log(
									JSON.stringify({
										input: arr,
									})
								);
								fetch(url, {
									method: "POST",
									headers: {
										"Content-Type": "application/json",
									},
									body: JSON.stringify({
										input: arr,
									}),
								})
									.then((response) => response.json())
									.then((data) => {
										console.log(data);
										setCrop(data.crop);
									})
									.catch((err) => console.log(err));
							}}
							style={styles.bothButtons}
						>
							<Text style={styles.submit}>Submit</Text>
						</TouchableOpacity>
						<View>
							<TextInput
								style={styles.input}
								onChangeText={setCode}
								value={code}
								placeholder="Code"
							/>
							<TouchableOpacity
								onPress={() => {
									console.log("code:", code);
									database
										.ref("Sensors")
										.child(code)
										.on("value", (snapshot) => {
											let data = snapshot.val();
											if (data) {
												console.log(data);
												setHumidity(data.humidity);
												setTemperature(
													data.temperature
												);
												setRainfall(data.water);
											} else {
												console.log("wrong code");
											}
										});
								}}
								style={styles.bothButtons}
							>
								<Text style={styles.fetch}>
									Fetch Sensor Data
								</Text>
							</TouchableOpacity>
							{crop && <Text>Recommended Crop: {crop}</Text>}
						</View>
					</View>
				</View>
			</ScrollView>
            </ImageBackground>
            </>
		);
	}
};
const secondaryColor = "#A3B59E";

const styles = StyleSheet.create({
	container: {
		paddingTop: 60,
		paddingBottom: 100,
		alignItems: "center",
		alignContent: "center",
	},
	input: {
		color: "black",
		backgroundColor: "white",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 15,
		marginTop: 20,
		marginHorizontal: 15,
		// width: "100%",
		width: 325,
		fontSize: 15,
		fontFamily: "monospace",
	},
	title: {
		fontSize: 25,
		alignItems: "center",
		// fontWeight: "bold",
		marginBottom: 20,
		fontFamily: "AlegreyaSans_700Bold",
	},
	submit: {
		fontSize: 20,
		backgroundColor: "#DCBC99",
		margin: 10,
		padding: 15,
		borderRadius: 15,
        fontFamily: "AlegreyaSans_700Bold",	},

	fetch: {
		fontSize: 20,
		backgroundColor: "#DCBC99",
		margin: 10,
		padding: 15,
		borderRadius: 15,
		fontFamily: "AlegreyaSans_700Bold",
	},
	bothButtons: {
		margin: 15,
		marginTop: 20,
		alignContent: "center",
		alignItems: "center",
	},
	boxMain: {
		// flex: 2,
		// position: "absolute",
		backgroundColor: secondaryColor,
		width: "95%",
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
	// inputContainer: {
	//     width: "60%",
	//     borderRadius:15,
	//     padding: 10,
	//     marginHorizontal:50,
	//     backgroundColor: secondaryColor,

	// },
});

export default CropRecommendation;
