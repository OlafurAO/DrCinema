import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../Header/Header';
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
		}
	}

	setMovies(movies) {
		this.setState({
			movies: movies,
		});
	}

	setUpcomingMovies(upcoming) {
		this.setState({
			upcoming: upcoming,
		})
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
					renderItem={ ({ item: { id, title, poster, plot, duration, year, genre, omdb }}) => {
						console.log(omdb)
						return(
							<TouchableOpacity style={styles.movie}>
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
						);
					}}keyExtractor={movie => {return movie.id.toString()}}
				/>
			</View>
		);
	}
}

export default Movies;
