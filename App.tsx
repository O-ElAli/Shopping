import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/Home';
import NearbyScreen from './src/screens/Nearby';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              drawerStyle: {
                backgroundColor: '#0a8ed9',
              },
              drawerActiveBackgroundColor: 'white',
              drawerActiveTintColor: '#0a8ed9',
              drawerInactiveTintColor: 'white',
              drawerInactiveBackgroundColor: '#0a8ed9',
              gestureHandlerProps: {
                hitSlop: { top: 0, bottom: 0, left: 0, right: 0 }, // Adjust swipe area carefully
              },
            }}
          >
            <Drawer.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Drawer.Screen 
              name="Nearby" 
              component={NearbyScreen}
              options={{ headerShown: false }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
