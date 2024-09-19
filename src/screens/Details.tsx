import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { Villa } from '../assets/DB';

type RootStackParamList = {
  Details: { villa: typeof Villa[0] };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC = () => {
    const route = useRoute<DetailsScreenRouteProp>();
    const { villa } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: villa.images[0] }}
                style={styles.image}
            />
            <Text style={styles.title}>{villa.name}</Text>
            <Text style={styles.location}>{villa.location}</Text>
            <Text style={styles.price}>{villa.price}</Text>
            <Text style={styles.description}>{villa.description}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.details}>{villa.bedrooms} Bedroom(s)</Text>
                <Text style={styles.details}>{villa.bathrooms} Bathroom(s)</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        height: 200,
        width: '100%',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    location: {
        fontSize: 18,
        color: 'gray',
        marginVertical: 5,
    },
    price: {
        fontSize: 20,
        color: '#0a8ed9',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        marginVertical: 10,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    details: {
        fontSize: 16,
        marginVertical: 5,
    }
});

export default DetailsScreen;
