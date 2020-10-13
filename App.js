import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Following from './src/screens/Following'
import Discover from './src/screens/Discover'
import Browse from './src/screens/Browse'
import Esports from './src/screens/Esports'

import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';


const TabNavigator = createBottomTabNavigator({
  Following: Following,
  Discover: Discover,
  Browse : Browse,
  Esports : Esports
},{
  defaultNavigationOptions: ({ navigation }) => ({
    
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = AntDesign;
      let iconName;

      switch(routeName){
        case 'Following': {
          iconName = focused
            ? 'heart'
            : 'hearto';
        }
        break;
        case 'Discover': {
          iconName = focused
            ? 'find'
            : 'find';
        }
        break;
        case  'Browse' : {
          iconName = focused
            ? 'minussquareo'
            : 'minussquareo';
        } 
        break;
        case 'Esports' : {
          iconName = focused
          ? 'dribbble'
          : 'dribbble';
        }
        break;
      }
      
      // You can return any component that you like here!
      return <AntDesign name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#6441a5',
    inactiveTintColor: 'white',
    activeBackgroundColor: 'black',
    inactiveBackgroundColor: 'black',
    fontFamily: 'Roobert',
    style: {
      borderTopColor: 'black',
      paddingRight: 25,
      paddingLeft: 25,
      backgroundColor: 'black',
    },
  
  },
  
});

//export default createAppContainer(TabNavigator);
const RootApp = createAppContainer(TabNavigator);

export default function App(props) {
  let [fontsLoaded] = useFonts({
    'Roobert-bold': require('./assets/fonts/RoobertTRIAL-Bold.otf'),
    'Roobert':require('./assets/fonts/RoobertTRIAL-Regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RootApp />
  );
}