import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomDrawer = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Home')}
      >
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Nearby')}
      >
        <Text style={styles.drawerItemText}>Nearby</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#0a8ed9',
  },
  drawerItem: {
    padding: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  drawerItemText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CustomDrawer;
