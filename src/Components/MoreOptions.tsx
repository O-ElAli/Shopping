import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Villa } from '../assets/DB';

const MoreOptions = ({ searchQuery }) => {
    const navigation = useNavigation();

    // Filter villas based on the search query
    const filteredVillas = Villa.filter(villa => 
        villa.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        villa.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        villa.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
        villa.bedrooms.toLowerCase().includes(searchQuery.toLowerCase()) 
    );

    const handlePress = (villa) => {
        navigation.navigate('Details', { villa });
    };

    return (
        <View style={styles.container}>
            {filteredVillas.map((villa, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={styles.option}
                    onPress={() => handlePress(villa)}
                >
                    <View style={{
                        width: '100%',
                        flexDirection: 'row'
                    }}>
                        <Image
                            source={{ uri: villa.images[0] }}
                            style={styles.image}
                        />
                        <View>
                            <Text style={styles.title}>
                                {villa.name}
                            </Text>
                            <Text style={styles.prices}>
                                {villa.price}
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                marginLeft: 10
                            }}>
                                <Text style={styles.details}>
                                    {villa.bedrooms} Bedroom
                                </Text>
                                <Text style={styles.details}>
                                    {villa.bathrooms} Bathroom
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    option: {
        margin: 10,
        width: '100%'
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 10,
    },
    title: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10
    },
    prices: {
        color: '#0a8ed9',
        fontSize: 12,
        marginLeft: 20,
        marginBottom: 15
    },
    details: {
        marginHorizontal: 10
    }
});

export default MoreOptions;
