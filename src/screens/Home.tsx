import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image , ImageBackground} from 'react-native';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import Header from '../Components/Header';

import { Villa } from '../assets/DB'

const HomeScreen: React.FC = () => {



    return (
        <ScrollView>
            {/* Header */}
            <Header />
            {/* Main Area */}
            <Text
            style={{
                color:'black',
                fontSize:20,
                margin:10,
                //add font family
            }}
            >
                Near from you
            </Text>
            <ScrollView
            horizontal={true}
            >
                {Object.keys(Villa.Evergreen.images).map(key => (
                    //adding a wrapper view because image background border radius refused to change
                <View
                key={key}
                style={{
                    height: 280,
                    width: 230,
                    margin: 10,
                    borderRadius: 20,
                    overflow: 'hidden'
                }}
            >
                <ImageBackground
                    source={{ uri: Villa.Evergreen.images[key] }}
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <View style={{ flex: 1, padding: 10 }}>
                        <Text style={{ color: 'white' }}>1.8km</Text>
                    </View>
                </ImageBackground>
            </View>
))}
            </ScrollView>


        </ScrollView>
    );
};

export default HomeScreen;
