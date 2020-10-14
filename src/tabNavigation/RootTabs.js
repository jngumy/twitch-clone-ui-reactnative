import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Categories from '../tabNavigation/Categories'
import LiveChannels from '../tabNavigation/LiveChannels'

const RouteConfigs = {
  Categories: Categories,
  Channels: LiveChannels
}

const RootTabs = createAppContainer(createMaterialTopTabNavigator(RouteConfigs, {
  tabBarOptions: {
    upperCaseLabel: false,
    activeTintColor: '#6441a5',
    inactiveTintColor: 'white',
    activeBackgroundColor: '#121212',
    inactiveBackgroundColor: '#121212',
    style: {
      borderTopColor: '#121212',
      backgroundColor: '#121212',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    indicatorStyle: {
      backgroundColor: '#6441a5',

    },
    labelStyle: {
      fontFamily: 'Roobert-bold',
      fontSize: 14,
      alignItems: 'flex-start'
    },
    tabStyle: {
      width: 120,
    },
  },
}));

export default RootTabs 