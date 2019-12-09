import React from 'react';
import { View, Text } from 'react-native';

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
			console.log(response)
			return response.json();
		}).then(response => {
			console.log(response)
		}).catch(error => console.log(error));
	}

	render() {
		return(
			<Text> Cinema bois </Text>
		);
	}
}

export default Cinemas;
