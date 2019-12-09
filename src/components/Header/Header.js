import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const Header = () =>  {
	return(
		<View style={styles.container}>
			<TouchableOpacity style={styles.cinemasButton}>
				<Text style={styles.text}> Cinemas </Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.moviesButton}>
				<Text style={styles.text}> Movies </Text>
			</TouchableOpacity>
		</View>
	)
}

export default Header;
