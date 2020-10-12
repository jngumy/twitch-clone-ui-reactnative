import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Following from './src/screens/Following'
import Discover from './src/screens/Discover'
import Browse from './src/screens/Browse'
import Esports from './src/screens/Esports'



const TabNavigator = createBottomTabNavigator({
  Following: Following,
  Discover: Discover,
  Browse : Browse,
  Esports : Esports
});

export default createAppContainer(TabNavigator);