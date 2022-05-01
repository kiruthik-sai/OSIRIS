import React, { useState, useEffect, useRef } from "react";
import {
	Button,
	Image,
	View,
	Platform,
	StyleSheet,
	TouchableOpacity,
	Text,
	ScrollView,
	Modal,
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
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import Emergency from "./emergency";
function Detector() {const cropBG = require("../assets/cropBG.jpg");

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
	const [modalVisible, setModalVisible] = useState(false);
	const [pestModealVisible, setPestModalVisible] = useState(false);
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [openCamera, setOpenCamera] = useState(false);
	const [image, setImage] = useState(null);
	const cameraRef = useRef();
	const [dataPassed, setDataPassed] = useState({
		disease: "",
		plant: "",
		remedy: "",
	});
	const [pestData, setPestData] = useState("");
	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
		// setModalVisible(true);
	}, []);

	useEffect(() => {
		console.log(openCamera);
	}, [openCamera]);
	// useEffect(()=>{

	// },[])
	const takePicture = async () => {
		if (cameraRef.current) {
			const options = { quality: 0.7, base64: true };
			const data = await cameraRef.current.takePictureAsync(options);
			console.log(data.uri);
			setImage(data.uri);
			setOpenCamera(false);
		}
	};
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		
		console.log("result", result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};
	if (!fontsLoaded) {
		return null;
	} else {
		console.log("fonts", fontsLoaded);
		return (
			<><ImageBackground
            source={cropBG}
            resizeMode="cover"
            style={styles.BG}
        >
				<ScrollView contentContainerStyle={styles.ScrollView}>
					<Text style={styles.title}>Crop Disease Detector</Text>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							setModalVisible(false);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<ScrollView>
									<Text style={styles.Report}>
										Analysis Report
									</Text>
									<Text style={styles.card}>
										<Text style={{ color: "black" }}>
											Disease:
										</Text>{" "}
										{dataPassed.disease}
									</Text>
									<Text style={styles.card}>
										<Text style={{ color: "black" }}>
											Plant:
										</Text>{" "}
										{dataPassed.plant}
									</Text>
									<Text style={styles.card}>
										<Text style={{ color: "black" }}>
											Remedy:
										</Text>{" "}
										{dataPassed.remedy}
									</Text>
									<Text style={styles.card}>
										<Text style={{ color: "black" }}>
											Call +1 833-897-2474 :
										</Text>{" "}
										for more help.
									</Text>
									<TouchableOpacity
										onPress={() => {
											setModalVisible(false);
										}}
									>
										<Text style={styles.close}>Close</Text>
									</TouchableOpacity>
								</ScrollView>
							</View>
						</View>
					</Modal>
					<Modal
						animationType="slide"
						transparent={true}
						visible={pestModealVisible}
						onRequestClose={() => {
							setPestModalVisible(false);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<ScrollView>
									<Text style={styles.Report}>
										Pest Detected: {pestData}
									</Text>
									<TouchableOpacity
										onPress={() => {
											setPestModalVisible(false);
										}}
									>
										<Text style={styles.close}>Close</Text>
									</TouchableOpacity>
								</ScrollView>
							</View>
						</View>
					</Modal>
					
					<TouchableOpacity onPress={pickImage}>
						<Text style={styles.pickImage}>
							Pick an image from camera roll
						</Text>
						{/* <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
      Login with Facebook
    </Text>
  </Icon.Button> */}
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setOpenCamera(!openCamera);
						}}
					>
						<Text style={styles.openCamera}>
							{openCamera ? "Close " : "Open"} Camera
						</Text>
					</TouchableOpacity>
					{openCamera && (
						<View style={styles.container}>
							<Camera
								ref={cameraRef}
								style={styles.camera}
								type={type}
							>
								<View style={styles.buttonContainer}>
									<TouchableOpacity
										style={styles.button}
										onPress={() => {
											console.log(type);
											setType(
												type ===
													Camera.Constants.Type.back
													? Camera.Constants.Type
															.front
													: Camera.Constants.Type.back
											);
										}}
									>
										<Text style={styles.text}> Flip </Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={styles.button}
										onPress={takePicture}
									>
										<Text style={styles.text}>
											Take Picture
										</Text>
									</TouchableOpacity>
								</View>
							</Camera>
						</View>
					)}
					{image && (
						<Image
							source={{ uri: image }}
							style={{ width: 200, height: 200 }}
						/>
					)}
					<TouchableOpacity
						onPress={async () => {
							const base64 = await FileSystem.readAsStringAsync(
								image,
								{
									encoding: "base64",
								}
							);
							let url = "http://10.0.0.59:8080/ok";
							fetch(url, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									image: base64,
								}),
							})
								.then((response) => response.json())
								.then((data) => {
									console.log(data);
									setDataPassed(data);
									setModalVisible(true);
								})
								.catch((err) => console.log("error: ", err));
						}}
					>
						<Text style={styles.TestForDisease}>
							Test for Disease{" "}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							if (image) {
								fetch("http://10.0.0.59:8080/infest")
									.then((response) => response.json())
									.then((data) => {
										setPestData(data.infestation);
										setPestModalVisible(true);
									});
							}
						}}
					>
						<Text style={styles.TestForDisease}>Test for Pest</Text>
					</TouchableOpacity>
				</ScrollView>
				</ImageBackground>
			</>
		);
	}
}

const styles = StyleSheet.create({
	Report: {
		fontFamily: "AlegreyaSans_700Bold",
		fontSize: 45,
		color: "white",
		marginBottom: 30,
	},
	card: {
		width: 300,
		borderRadius: 15,
		padding: 5,
		paddingLeft: 10,
		backgroundColor: "#DCBC99",
		fontSize: 20,
		color: "white",
		marginVertical: 10,
	},  BG: {
        flex: 1,
        justifyContent: "center",
    },
	ScrollView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "#f8fff5",
		// paddingVertical:100,
	},
	pickImage: {
		backgroundColor: "#badede",
		margin: 10,
		padding: 15,
		borderRadius: 15,
		fontSize: 15,
		fontWeight: "bold",
	},
	title: {
		fontSize: 25,
		alignItems: "center",
		// fontWeight: "bold",
		marginBottom: 20,
		fontFamily: "AlegreyaSans_700Bold",
	},
	openCamera: {
		backgroundColor: "#badede",
		margin: 10,
		padding: 15,
		borderRadius: 15,
		fontWeight: "bold",

		fontSize: 15,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	close: {
		padding: 15,
		borderRadius: 15,
		backgroundColor: "red",
		color: "white",
		fontWeight: "bold",
		width: 70,
	},
	modalView: {
		width: 350,
		height: 700,
		margin: 20,
		backgroundColor: "#A3B59E",
		borderRadius: 20,
		padding: 10,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	container: {
		flex: 1,
		width: "100%",
		paddingBottom: 150,
		backgroundColor: "#f8fff5",
		// padding: 50,
	},
	camera: {
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
		backgroundColor: "transparent",
		flexDirection: "row",
		margin: 20,
	},
	button: {
		flex: 0.1,
		alignSelf: "flex-end",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		color: "white",
	},
	TestForDisease: {
		backgroundColor: "#DCBC99",
		margin: 12,
		padding: 15,
		borderRadius: 15,
		fontSize: 15,
		fontWeight: "bold",
	},
});

export default Detector;
