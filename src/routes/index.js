import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../components/Main/Main';
import Cinemas from '../components/Cinemas/Cinemas';
import CinemaDetails from '../components/CinemaDetails/CinemaDetails';

const StackNavigator = createStackNavigator({
	Main,
	Cinemas,
	CinemaDetails,
},
{
	headerMode: 'none',
});

export default createAppContainer(StackNavigator);
