/*
const credentials = {
	username: 'OliAO',
	password: 'Password123',
}
const credentials = {
	username: 'stefant17',
	password: 'Hilla104',
}
*/

const credentials = {
	username: 'OliAO',
	password: 'Password123',
}

export const getToken = async(setState) => {
	fetch('http://api.kvikmyndir.is/authenticate', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials),
	}).then(response => {
		return response.json()
	}).then(response => {
		setState(response.token)
	});
}

export const getCinemas = async(token, setCinemas) => {
	fetch('http://api.kvikmyndir.is/cinemas', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'x-access-token': token
		},
	}).then(response => {
		return response.json();
	}).then(response => {
		setCinemas(response);
	}).catch(error => console.log(error));
}

export const getMovies = async(token, setMovies) => {
	fetch('http://api.kvikmyndir.is/movies', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'x-access-token': token
		},
	}).then(response => {
		return response.json();
	}).then(response => {
		//console.log(response)
		setMovies(response);
	}).catch(error => console.log(error));
}
