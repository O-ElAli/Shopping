import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()


import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/Home';
import NearbyScreen from './src/screens/Nearby';

const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen 
          name="Nearby"
          component={NearbyScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


export default App;
