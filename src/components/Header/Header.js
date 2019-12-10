import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';

class Header extends React.Component{
	render() {
		const { navigation } = this.props;
		const { token } = this.props;
		return(
			<View style={styles.container}>
				<TouchableOpacity style={styles.cinemasButton} onPress={
					() => navigation.navigate('Main')
				}>
					<Text style={styles.text}> Cinemas </Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.moviesButton} onPress={
					() => navigation.navigate('Movies', {token: token})
				}>
					<Text style={styles.text}> Movies </Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default Header;
