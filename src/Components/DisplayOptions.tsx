import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Villa } from '../assets/DB';

const DisplayOptions = () => {
    const navigation = useNavigation();

    const handlePress = (villa) => {
        navigation.navigate('Details', { villa });
    };

    return (
        <View>
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
            <ScrollView horizontal={true}>
            {Villa.map((villa, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={{
                        height: 280,
                        width: 230,
                        margin: 10,
                        borderRadius: 20,
                        overflow: 'hidden'
                    }}
                    onPress={() => handlePress(villa)}
                >
                    <ImageBackground
                        source={{ uri: villa.images[0] }}
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            {/* Distance in the top right */}
                            <Text style={{ 
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                color: 'white',
                                backgroundColor: 'grey',
                                opacity: 0.7,
                                padding: 5,
                                borderRadius: 15,
                                overflow: 'hidden',
                            }}>
                                {villa.distance}
                            </Text>
                            {/* Name in the bottom left */}
                            <Text style={{
                                position: 'absolute',
                                bottom: 35,
                                left: 10,
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>
                                {villa.name}
                            </Text>
                            <Text style={{
                                position: 'absolute',
                                bottom: 10,
                                left: 10,
                                color: '#fefefef',
                                fontSize: 18,
                            }}>
                                {villa.location}
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            ))}
        </ScrollView>
        </View>
    );
}

export default DisplayOptions;
