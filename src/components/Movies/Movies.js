import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../Header/Header';
import { getMovies } from '../../services/apiService';

class Movies extends React.Component {
	componentDidMount() {
		getMovies(this.props.navigation.getParam('token'),
			movies => this.setMovies(movies)
		);
	}

	constructor(props) {
		super(props);
		this.state = {
			movies: null,
		}
	}

	setMovies(movies) {
		this.setState({
			movies: movies,
		});
	}

	getcinemas(showtimes){
		cinemas = [];
		for (let i = 0; i< showtimes.length; i++){
			cinemas.push(<td>showtimes[i].cinema</td>);
		};
		return cinemas;
	}

	render() {
		const { navigation } = this.props;
		const token = navigation.getParam('token');
		return(
			<View>
				<Header navigation={ navigation } token={ token }/>
				<FlatList
					numColumns={1}
					data={this.state.movies}
					initialNumToRender={50}
					renderItem={ ({ item: { id, title, poster, plot, duration, year, genre, showtimes }}) => {
						console.log(showtimes.length);
						return(
							<Text> { title } </Text>,
							<Text> { this.getcinemas(showtimes) } </Text>
						);
					}}keyExtractor={movie => {return movie.id.toString()}}
				/>
			</View>
		);
	}
}

export default Movies;
