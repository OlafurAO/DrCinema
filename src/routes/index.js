import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../components/Main/Main';
import Cinemas from '../components/Cinemas/Cinemas';
import CinemaDetails from '../components/CinemaDetails/CinemaDetails';
import Movies from '../components/Movies/Movies';
import Movie from '../components/Movie/Movie.js';

const StackNavigator = createStackNavigator({
	Main,
	Cinemas,
	CinemaDetails,
	Movie,
	Movies,
},
{
	headerMode: 'none',
});

export default createAppContainer(StackNavigator);
