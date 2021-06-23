import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Calculator from "./src/screens/Calculator";

export default function App() {
	return (
		<View style={styles.container}>
			<Calculator />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:
			"linear-background(to right, rgb(83, 105, 118), rgb(40, 50, 60))",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
	},
});
