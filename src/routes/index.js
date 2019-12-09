import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../components/Main/Main';
import Cinemas from '../components/Cinemas/Cinemas';

const StackNavigator = createStackNavigator({
	Main,
	Cinemas,
});

export default createAppContainer(StackNavigator);
