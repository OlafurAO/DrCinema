import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		width: '100%',
		marginBottom: 'auto',
	},

	header: {
		fontSize: 30,
		borderBottomWidth: 2,
		padding: 15,
		alignSelf: 'center',
	},

	movie: {
		alignSelf: 'center',
		justifyContent: 'center',
		alignContent: 'center',

		padding: 20,
	},

	movieTitle: {
		fontSize: 20,
		alignSelf: 'center',
	},

	movieRelease: {
		alignSelf: 'center',
	},

	poster: {
		alignSelf: 'center',
		marginTop: 5,
		width: 250,
		height: 250,
		borderRadius: 40,
	}
});
