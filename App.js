import React from 'react';
import { createAppContainer } from 'react-navigation';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import TabNavigator from './src/tabNavigation/BottomTabNavigator'

const RootApp = createAppContainer(TabNavigator);

export default function App(props) {
  let [fontsLoaded] = useFonts({
    'Roobert-bold': require('./assets/fonts/RoobertTRIAL-Bold.otf'),
    'Roobert': require('./assets/fonts/RoobertTRIAL-Regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RootApp />
  );
}