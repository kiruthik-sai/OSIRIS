import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	FlatList,
	Image,
	TouchableOpacity,
	ScrollView,
	Modal,
	ImageBackground,
} from "react-native";
import React, { useState } from "react";
import plants from "../assets/data/plants.json";
import plantsrecc from "../assets/data/plantsrecc.json";
import PlantList from "../components/PlantList/index";
import { LinearGradient } from "expo-linear-gradient";
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
import Emergency from "./emergency";

const PlantLists = ({ plant ,modalVisible,setModalVisible}) => (
	// <View style={styles.item}>
	// 	<Text style={styles.name}>{plant.name}</Text>
	// </View>
	

	<View>
		<TouchableOpacity 
		// onPress={() => setModalVisible(!modalVisible)}
			// onPress={()=>navigation.navigate("Detail")}
			style={{
				padding: 10,
				height: 250,
				elevation: 2,
				backgroundColor: "#A3B59E",
				marginLeft: 20,
				marginTop: 20,
				borderRadius: 15,
				marginBottom: 10,
				width: 160,
			}}
		>
			<Image
				source={{
					uri: plant.image,
				}}
				style={styles.image}
			/>
			<View
				style={{
					flexDirection: "row",
					paddingTop: 10,
					paddingHorizontal: 10,
				}}
			>
				<Text
					style={{
						fontFamily:"AlegreyaSans_700Bold",
						fontSize:20,
						color: "white",
					}}
				>{plant.name}</Text>
				
			</View>
			
		</TouchableOpacity>
	</View>
);
export default function Plants() {
	const [modalVisible, setModalVisible] = useState(false);
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const d = new Date();
	let monthName = months[d.getMonth()];
	const renderItem = ({ item }) => <PlantLists plant={item} modalVisible={modalVisible} setModalVisible={setModalVisible}/>;
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
  const cropBG = require("../assets/plantsBG.jpg");
  
  if (!fontsLoaded) {
	return null;
} else {
	console.log("fonts",fontsLoaded)
	return ( <><ImageBackground
		source={cropBG}
		resizeMode="cover"
		style={styles.BG}
	>
		<ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
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
                            
                            <Emergency/>
                        </View>
                    </View>
			</Modal>
			<View style={styles.container}>
				<View style={styles.profileHeader}>
					<View style={styles.profileMenu}>
						<Image
							source={require("../assets/projectLogo.png")}
							style={styles.profileLogo}
						/>
					</View>
					<TouchableOpacity
						style={styles.profilePhoto}
						
					>
						<Image
							source={require("../assets/avatar.png")}
							style={styles.profilePhoto}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ width: "35%" }}>
					<Text
						style={{
							// fontWeight: "bold",
							fontSize: 19,
							color: "#c78340",
							margin: 1,
							marginTop: 15,
							marginLeft: 23,
							// textShadowColor: "rgba(186, 222, 222 0.25)",
							// textShadowOffset: { width: -1, height: 1 },
							// textShadowRadius: 10,
							backgroundColor:"rgba(186, 222, 222,0.6)",
							borderRadius:15,
							padding: 5,
							paddingHorizontal:6,fontFamily:"AlegreyaSans_700Bold",
						}}
					>
						Your crops:
					</Text>
				</View>

				<FlatList
					horizontal
					data={plants}
					renderItem={renderItem}
					showsHorizontalScrollIndicator={false}
					style={styles.flatList}
				/>
				<View style={{ width: "90%" }}>
					<Text
						style={{							fontSize: 19,

							// fontWeight: "bold",
							color: "#c78340",
							margin: 1,
							marginTop: 15,
							marginLeft: 23,
							// textShadowColor: 'rgba(186, 222, 222 0.25)',
							// textShadowOffset: { width: -1, height: 1 },
							// textShadowRadius: 10,
							backgroundColor:"rgba(186, 222, 222,0.6)",
							borderRadius:15,
							padding: 5,
							paddingHorizontal:6,fontFamily:"AlegreyaSans_700Bold",
						}}
					>
						Reccomendations for {monthName} and soil type:
					</Text>
				</View>
				<FlatList
					horizontal
					data={plantsrecc}
					renderItem={renderItem}
					showsHorizontalScrollIndicator={false}
					style={styles.flatList2}
					
				/>
			</View>
		</ScrollView>
		</ImageBackground>
		</>
	);
}}

const styles = StyleSheet.create({
	ScrollView: { paddingBottom: 82,  flex: 1 },
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 100,
		marginHorizontal: 16,
	},
	flatList: {
		marginTop: 5,
		textShadowColor: "rgba(0, 0, 0, 0.25)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	flatList2: {
		marginBottom: 80,
		textShadowColor: "rgba(0, 0, 0, 0.25)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},

	modalView: {
		margin: 20,
		backgroundColor: "white",
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
	BG: {
		flex: 1,
		justifyContent: "center",
	},
	name: {
		fontSize: 12,
	},
	image: {
		padding: 1,
		width: "100%",
		aspectRatio: 1 / 1,
		// paddingTop:100,
		marginBottom: 5,
		borderRadius: 15,
	},
	profileHeader: {
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
		paddingTop: 25,
		marginTop: 20,
	},
	profileLogo: {
		width: 40,
		height: 40,
		marginLeft: 15,
		borderRadius: 50,
	},

	profilePhoto: {
		width: 50,
		height: 50,
		marginRight: 15,
		marginLeft: "auto",
		borderRadius: 50,
	},
});
