import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const CheckBox = (props) => {
	const iconName = props.isChecked ?
		"checkbox-marked" : "checkbox-blank-outline";
	return (
		<View style={styles.container}>
			<Pressable onPress={props.onPress}>
				<MaterialCommunityIcons
					name={iconName} size={24} color="#fff" />
			</Pressable>
			<Text style={styles.texto}>{props.title}</Text>
		</View>
	);
};

export default CheckBox;

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: '100%',
		marginTop: 5,
		marginHorizontal: 5,
	},
	texto: {
		fontSize: 16,
		color: "#fff",
		marginLeft: 5,
		fontWeight: "600",
	},
});
