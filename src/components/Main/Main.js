import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import Cinemas from '../Cinemas/Cinemas';
import Header from '../Header/Header';
import { getToken } from '../../services/apiService';
import styles from './styles';

class Main extends React.Component{
	componentDidMount() {
		getToken(token => this.setToken(token));
	}

	constructor(props) {
		super(props);
		this.state = {
			accessToken: null,
		}
	}

	setToken(token) {
		this.setState({
			accessToken: token,
		});
	}

	render() {if(this.state.accessToken !== null) {
			return(
				<View style={styles.container}>
					<Header navigation={ this.props.navigation } token={ this.state.accessToken }/>
					<Cinemas navigation={ this.props.navigation } token={ this.state.accessToken }/>
				</View>
			);
		}
		return(
			<View style={{alignSelf: 'center', marginTop: 300}}>
				<Text style={{fontSize: 20}}> Loading . . . </Text>
			</View>
		)
	}
}

export default Main;
