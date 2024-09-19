import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import NearbyScreen from './src/screens/Nearby';
import DetailsScreen from './src/screens/Details';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#0a8ed9',
          width: 240, // Adjust the width of the drawer here
        },
        drawerType: 'slide', // This makes the drawer push the content
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: '#0a8ed9',
        drawerInactiveTintColor: 'white',
        drawerInactiveBackgroundColor: '#0a8ed9',
        overlayColor: 'rgba(0, 0, 0, 0.3)', // Adds a dimmed overlay when the drawer is open
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
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainDrawer} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
