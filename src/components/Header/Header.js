import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';

class Header extends React.Component{
	render() {
		return(
			<View style={styles.container}>
				<TouchableOpacity style={styles.cinemasButton} onPress={
					() => this.props.navigation.navigate('Main')
				}>
					<Text style={styles.text}> Cinemas </Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.moviesButton} onPress={
					() => this.props.navigation.navigate('Main')
				}>
					<Text style={styles.text}> Movies </Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default Header;
