import React from 'react';
import { View, Text, Linking, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import Header from '../Header/Header';
import { getMovies } from '../../services/apiService';
import styles from './styles';

class CinemaDetails extends React.Component{
	componentDidMount() {
		const { navigation } = this.props;
		const token = navigation.getParam('token');
		getMovies(token,
			movies => this.setMoviesInCinema(movies)
		);
	}

	constructor(props) {
		super(props);
		this.state = {
			movies: null,
		}
	}

	setMoviesInCinema(movies) {
		const { navigation } = this.props;
		const id = navigation.getParam('id');

		moviesInCinema = [];
		for(const movie of movies) {
			for(const showtime of movie.showtimes) {
				if(showtime.cinema.id === id) {
					moviesInCinema.push(movie);
				}
			}
		}
		this.setState({
			movies: moviesInCinema,
		});
		this.forceUpdate();
	}

	goToWebsite(url) {
		Linking.openURL('http://' + url)
		.catch(err => console.log(err));
	}

	render() {
		const { navigation } = this.props;
		const token = navigation.getParam('token');
		const cinemaId = navigation.getParam('id');
		const name = navigation.getParam('name');
		const description = navigation.getParam('description');
		const address = navigation.getParam('address');
		const city = navigation.getParam('city');
		const phone = navigation.getParam('phone');
		const website = navigation.getParam('website');

		return(
			<View>
				<Header navigation={this.props.navigation} token={token} />
				<ScrollView style={styles.cinemaContainer}>
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
					<Text style={styles.moviesHeader}> Movies playing in this cinema </Text>
					<FlatList
						numColumns={1}
			      data={this.state.movies}
						initialNumToRender={50}
			      renderItem={ ({ item: { id, title, year, poster, genres, plot, duration, showtimes }}) => {
							return(
								<TouchableOpacity style={styles.movie} onPress={
									() => navigation.navigate('Movie', {
									cinemaId: cinemaId, id: id, name: title, poster: poster,
									plot: plot, duration: duration, year: year, genre: genres,
									showtimes: showtimes
								})}>
									<View style={styles.imageBorder}>
										<Image
											style={ styles.poster }
											resizeMode='cover'
											source={{uri: poster}}
										/>
									</View>
									<View>
										<Text> { title } </Text>
										<Text> { year } </Text>
										<FlatList
											numColumns={2}
											data={genres}
											initialNumToRender={50}
											renderItem={ ({ item: { Name }}) => {
												return(
													<Text style={{fontSize: 10}}> { Name }, </Text>
												);
											}}keyExtractor={genre => {return genre.ID.toString()}}
										/>
									</View>
								</TouchableOpacity>
							)
						}}keyExtractor={movie => {return movie.id.toString()}}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default CinemaDetails;
