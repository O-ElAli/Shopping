import React from 'react'
import { View, Text, ScrollView, ImageBackground } from 'react-native'

import { Villa } from '../assets/DB'

const DisplayOptions = () => {
    return (
        <ScrollView horizontal={true}>
            {Villa.map((villa, index) => (
                <View
                    key={index}
                    style={{
                        height: 280,
                        width: 230,
                        margin: 10,
                        borderRadius: 20,
                        overflow: 'hidden'
                    }}
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
                                bottom: 10,
                                left: 10,
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>
                                {villa.name}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            ))}
        </ScrollView>
    )
}

export default DisplayOptions;
