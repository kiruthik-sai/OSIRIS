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
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Camera } from "expo-camera";
import Icon from 'react-native-vector-icons/FontAwesome';

function Detector() {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [openCamera, setOpenCamera] = useState(false);
	const [image, setImage] = useState(null);
	const cameraRef = useRef();

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	useEffect(() => {
		console.log(openCamera);
	}, [openCamera]);

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

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};
	return (
		<ScrollView contentContainerStyle={styles.ScrollView}>
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
				<Text style={styles.openCamera}>{openCamera?"Close ":"Open"} Camera</Text>
			</TouchableOpacity>
			{openCamera && (
				<View style={styles.container}>
					<Camera ref={cameraRef} style={styles.camera} type={type}>
						<View style={styles.buttonContainer}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									console.log(type);
									setType(
										type === Camera.Constants.Type.back
											? Camera.Constants.Type.front
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
								<Text style={styles.text}>Take Picture</Text>
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
					const base64 = await FileSystem.readAsStringAsync(image, {
						encoding: "base64",
					});
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
						})
						.catch((err) => console.log("error: ", err));
				}}
			>
				<Text style={styles.TestForDisease} >Test for Disease </Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	ScrollView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#f8fff5",
    // paddingVertical:100,
	},
	pickImage: {
		backgroundColor: "#DCBC99",
		margin: 10,
		padding: 15,
		borderRadius: 15,
		fontSize: 15,
		fontWeight: "bold",
	},
	openCamera: {
		backgroundColor: "#DCBC99",
		margin: 10,
		padding: 15,
		borderRadius: 15,
    fontWeight: "bold",

		fontSize: 15,
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
		backgroundColor: "red",
		margin: 10,
		padding: 15,
		borderRadius: 15,
		fontSize: 15,
		fontWeight: "bold",
	},
});

export default Detector;
