import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{color:'red'}}>Welcome to the Home Screen!</Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
