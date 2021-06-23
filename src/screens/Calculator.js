import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Display from "../components/Display";

export default class Calculator extends Component {
	state = {};

	render() {
		return (
			<View>
				<Display></Display>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
