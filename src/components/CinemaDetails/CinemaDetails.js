import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header/Header';
import styles from './styles';

class CinemaDetails extends React.Component{
	render() {
		const { navigation } = this.props;
		const name = navigation.getParam('name');
		return(
			<View>
				<Header navigation={this.props.navigation} />
				<Text> {name} </Text>
			</View>
		);
	}
}

export default CinemaDetails;
