import { Image, StyleSheet, Text, View } from "react-native";

const PlantList = ({ restaurant }) => {
	return (

		<View style={styles.restaurantContainer}>
			<Image
				source={{
					uri: restaurant.image,
				}}
				style={styles.image}
			/>
			<View style={styles.row}>
				<View>
					<Text style={styles.title}>{restaurant.name}</Text>
					<Text style={styles.subtitle}>
						$ ${restaurant.deliveryFee} &#8226;{" "}
						{restaurant.minDeliveryTime} -{" "}
						{restaurant.maxDeliveryTime} minutes
					</Text>
				</View>
				<View style={styles.rating}>
					<Text>{restaurant.rating}</Text>
				</View>
			</View>
		</View>
	);
};

export default PlantList;

const styles = StyleSheet.create({
	restaurantContainer: {
		marginVertical: 10,
		width: "100%",

	},
	image: {
		width: "100%",
		aspectRatio: 5 / 3,
		marginBottom: 5,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginVertical: 5,
	},
	subtitle: {
		color: "gray",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
	rating: {
		marginLeft: "auto",
		backgroundColor: "lightgray",
		padding: 0.5,
		width: 30,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	},
});
