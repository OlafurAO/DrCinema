import React from 'react';
import { View, Text, FlatList, Linking, TouchableOpacity } from 'react-native';
import { getCinemas } from '../../services/apiService';
import styles from './styles.js';

class Cinemas extends React.Component {
	componentDidMount() {
		getCinemas(this.props.token,
			cinemas => this.setCinemas(cinemas)
		);
	}

	constructor(props) {
		super(props);
		this.state = {
			cinemas: null,
		}
	}

	setCinemas(cinemas) {
		cinemas = cinemas.sort((a, b) => {
			return a.name > b.name;
		});

		/*
		var newCinemas = [];
		for(var i = 0; i < cinemas.length; i++) {
			var newCinema = {}
			for(var key in cinemas[i]) {
				newCinema[i][key.trim()] = cinemas[i][key];
			}
			newCinemas.push(newCinema);
		}*/

		var newCinemas = [];
		for(const cinema of cinemas) {
			var newCinema = {};
			Object.keys(cinema).map(key => {
				newCinema[key.trim()] = cinema[key];
				if(key === 'description') {
					if(newCinema['description'] !== null) {
						newCinema['description'] = JSON.stringify(newCinema['description'])
						newCinema['description'].replace('/<[^>]*>?/gm', '');
						console.log(newCinema['description'])

					}
				}
			});
			newCinemas.push(newCinema);
		}

		this.setState({
			cinemas: newCinemas,
		});
	}

	goToWebsite(url) {
		Linking.openURL('http://' + url)
		.catch(err => console.log(err));
	}

	render() {
		return(
			<View style={styles.container}>
				<FlatList
					numColumns={1}
	        data={this.state.cinemas}
					initialNumToRender={50}
	        renderItem={ ({ item: { id, name, address, city, description, phone, website }}) => {
						return(
							<View style={styles.cinema}>
								<TouchableOpacity onPress={
									() => this.props.navigation.navigate('CinemaDetails', {
										id: id, name: name, address: address, city: city,
										description: description, phone: phone, website: website,
										token: this.props.token,
									})}>
									<Text style={styles.cinemaName}> { name } </Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={ () => this.goToWebsite(website)}>
									<Text style={styles.cinemaWebsite}> { website } </Text>
								</TouchableOpacity>
							</View>
						)
					}}keyExtractor={cinema => {return cinema.name}}
				/>
		</View>
		);
	}
}

export default Cinemas;
