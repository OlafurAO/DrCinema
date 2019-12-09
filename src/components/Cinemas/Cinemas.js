import React from 'react';
import { View, Text, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const credentials = {
	username: 'OliAO',
	password: 'Password123',
}

class Cinemas extends React.Component {
	componentDidMount() {
		fetch('http://api.kvikmyndir.is/authenticate', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
      	'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials),
		}).then(response => {
			return response.json()
		}).then(response => {
			this.setState({accessToken: response.token})
			this.fetchCinemas(response.token);
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			cinemas: null,
			accessToken: null,
		}
	}

	fetchCinemas(token) {
		fetch('http://api.kvikmyndir.is/theaters', {
			method: 'GET',
			headers: {
      	'Content-Type': 'application/json',
				'Accept': 'application/json',
				'x-access-token': token
			},
		}).then(response => {
			return response.json();
		}).then(response => {
			this.setState({
				cinemas: response,
			});
		}).catch(error => console.log(error));
	}

	goToWebsite(url) {
		Linking.openURL('http://' + url)
		.catch(err => console.log(err));
	}

	render() {
		return(
			<View style={styles.container}>
				<FlatList style={styles.cinemaContainer}
					numColumns={1}
	        data={this.state.cinemas}
					initialNumToRender={50}
	        renderItem={ ({ item: { id, name, address, city, description, phone, website }}) => {
						return(
							<View style={styles.cinema}>
								<Text> { name } </Text>
								<TouchableOpacity onPress={ () => this.goToWebsite(website)}>
									<Text> { website } </Text>
								</TouchableOpacity>
							</View>
						)
					}}keyExtractor={cinema => cinema.name}
				/>
		</View>
		);
	}
}

export default Cinemas;
