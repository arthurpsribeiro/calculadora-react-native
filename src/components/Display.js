import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default (props) => {
	return (
		<View style={styles.display}>
			<Text style={styles.displayValue}>0</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	display: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.6)",
	},
	displayValue: {
		fontSize: 60,
		color: "#fff",
	},
});
