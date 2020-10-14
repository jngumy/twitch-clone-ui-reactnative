import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Following from '../screens/Following'
import Discover from '../screens/Discover'
import Browse from '../screens/Browse'
import Esports from '../screens/Esports'

import { AntDesign } from '@expo/vector-icons'


const TabNavigator = createBottomTabNavigator({
    Following: Following,
    Discover: Discover,
    Browse: Browse,
    Esports: Esports
}, {
    defaultNavigationOptions: ({ navigation }) => ({

        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = AntDesign;
            let iconName;

            switch (routeName) {
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
                case 'Browse': {
                    iconName = focused
                        ? 'minussquareo'
                        : 'minussquareo';
                }
                    break;
                case 'Esports': {
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
        activeTintColor: '#9146ff',
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

export default TabNavigator