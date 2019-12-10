import React from 'react';
import { View, Text, FlatList, Linking, TouchableOpacity } from 'react-native';
import { getCinemas} from '../../services/apiService';
import styles from './styles.js';

class Cinemas extends React.Component {
	componentDidMount() {
		getCinemas(this.props.token, cinemas => this.setCinemas(cinemas));
	}

	constructor(props) {
		super(props);
		this.state = {
			cinemas: null,
		}
	}

	setCinemas(cinemas) {
		cinema = cinemas.sort((a, b) => {
			return a.name > b.name;
		});

		//console.log(cinema);
		this.setState({
			cinemas: cinemas,
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
						console.log(address)
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
					}}keyExtractor={cinema => cinema.name}
				/>
		</View>
		);
	}
}

export default Cinemas;
