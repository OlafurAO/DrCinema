import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, WebView } from 'react-native';
import Header from '../Header/Header';
import { Video } from 'expo-av';
import { getMovies, getUpcomingMovies } from '../../services/apiService';
import styles from './styles';

class Movies extends React.Component {
	componentDidMount() {
		getMovies(this.props.navigation.getParam('token'),
			movies => this.setMovies(movies)
		);
		getUpcomingMovies(this.props.navigation.getParam('token'),
			movies => this.setUpcomingMovies(movies)
		);
	}

	constructor(props) {
		super(props);
		this.state = {
			movies: null,
			upcoming: null,
			playTrailer: false,
			movieId: null,
		}
	}

	setMovies(movies) {
		this.setState({
			movies: movies,
		});
	}


	setUpcomingMovies(upcoming) {
		upcoming = upcoming.sort((a, b) => {
			console.log(a['title'])
			console.log(a['release-dateIS'])
			return a['release-dateIS'] < b['release-dateIS'];
		});

		this.setState({
			upcoming: upcoming,
		});
	}

	render() {
		const { navigation } = this.props;
		const token = navigation.getParam('token');
		return(
			<View>
				<Header navigation={ navigation } token={ token }/>
				<Text style={styles.header}> Upcoming Movies </Text>
				<FlatList
					numColumns={1}
					data={this.state.upcoming}
					initialNumToRender={50}
					renderItem={ ({ item: { id, title, poster, plot, duration, year, genre, omdb, showtimes, trailers }}) => {
						if(trailers[0] !== undefined) {
							if(trailers[0]['results'][0] !== undefined) {
								//console.log(trailers[0]['results'][0]['url'])
							} else {
								trailers = undefined;
							}
						} else {
							trailers = undefined;
						}

						return(
							<View>
								<TouchableOpacity style={styles.movie} onPress={
									() => {
										this.setState({
											playTrailer: this.state.movieId === id ? false : true,
											movieId: id,
										});
										this.forceUpdate();
									}
								}>
									<Image
										style={ styles.poster }
										resizeMode='cover'
										source={{uri: poster}}
									/>
									<Text style={styles.movieTitle}> { title } </Text>
									{omdb[0] !== undefined ?
										<Text style={styles.movieRelease}> { omdb[0]['Released'] } </Text>
										:
										<Text style={styles.movieRelease}> N/A </Text>
									}
								</TouchableOpacity>
								{this.state.playTrailer === true && this.state.movieId == id &&
									trailers !== undefined ?
									<View style={{
										height: 250, borderRadius: 40,
										width: 250, alignSelf: 'center',
										position: 'absolute', top: 25
									}}>
										<WebView
											style={{

											}}
											javaScriptEnabled={true}
											source={{
												uri: trailers[0]['results'][0]['url'],
											}}
										/>
									</View>
									:
									null
								}
							</View>
						);
					}}keyExtractor={movie => {return movie.id.toString()}}
				/>
			</View>
		);
	}
}

export default Movies;
