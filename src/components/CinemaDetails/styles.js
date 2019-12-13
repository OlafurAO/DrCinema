import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		backgroundColor: 'black',
		height: 100,
		width: '100%',
		justifyContent: 'center',
		flexDirection: 'row',
		marginBottom: 'auto',
	},

	cinemaContainer: {
		padding: 10,
		marginTop: -10,
	},

	movieContainer: {
		padding: 10,
		marginBottom: 10,
	},

	cinemaNameContainer: {
		borderBottomWidth: 2,
		padding: 20,
	},

	cinemaName: {
		fontSize: 20,
	},

	cinemaDescContainer: {

	},

	cinemaDesc: {
		marginBottom: 20,
	},

	cinemaAddressContainer: {

	},

	cinemaWebsite: {
		color: 'blue',
		borderBottomWidth: 2,
	},

	moviesHeader: {
		fontSize: 25,
	},

	movie: {
		padding: 10,
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},

	imageBorder: {
		marginTop: 5,
		borderRadius: 60,
		borderWidth: 4,
		marginRight: 20,
	},

	poster: {
		width: 100,
		height: 100,
		borderRadius: 60,
	}
});
