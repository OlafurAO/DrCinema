import React from 'react';
import { View, Text } from 'react-native';
import Cinemas from '../Cinemas/Cinemas';
import styles from './styles';

class Main extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Cinemas />
			</View>
		);
	}
}

export default Main;
