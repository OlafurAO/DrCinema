import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Header from '../Header/Header';
import styles from './styles';

class CinemaDetails extends React.Component{
	goToWebsite(url) {
		Linking.openURL('http://' + url)
		.catch(err => console.log(err));
	}

	render() {
		const { navigation } = this.props;
		const token = navigation.getParam('token');
		const name = navigation.getParam('name');
		const description = navigation.getParam('description');
		const address = navigation.getParam('address');
		const city = navigation.getParam('city');
		const phone = navigation.getParam('phone');
		const website = navigation.getParam('website');

		return(
			<View>
				<Header navigation={this.props.navigation} token={token} />
				<View style={styles.cinemaNameContainer}>
					<Text style={styles.cinemaName}> {name} </Text>
				</View>
				<View style={styles.cinemaDescContainer}>
					<Text style={styles.cinemaDesc}> {description} </Text>
				</View>
				<View style={styles.cinemaAddressContainer}>
					<Text style={styles.cinemaAddress}> Address: {address}, {city} </Text>
				</View>
				<View style={styles.cinemaPhoneContainer}>
					<Text style={styles.cinemaPhone}> Phone: {phone} </Text>
				</View>
				<TouchableOpacity style={styles.cinemaWebsiteContainer} onPress={ website => this.goToWebsite(website)}>
					<Text style={styles.cinemaWebsite}> {website} </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default CinemaDetails;
