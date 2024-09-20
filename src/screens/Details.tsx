import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity , Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

import { Villa } from '../assets/DB';

type RootStackParamList = {
  Details: { villa: typeof Villa[0] };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC = () => {
    const navigation = useNavigation(); // Get navigation object
    const route = useRoute<DetailsScreenRouteProp>();
    const { villa } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={{ uri: villa.images[0] }}
                style={styles.image}
                imageStyle={{borderRadius:20}}
            >
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{
                        margin:10,
                    }}
                    >
                        <Text style={{
                            backgroundColor:'grey',
                            opacity:0.5,
                            padding:10,
                            color:'white',
                            borderRadius:10
                        }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <Text style={{margin:10,color:'white',padding:10}}>
                        Save
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{villa.name}</Text>
                    <Text style={styles.location}>{villa.location}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.details}>{villa.bedrooms} Bedroom</Text>
                    <Text style={styles.details}>{villa.bathrooms} Bathroom</Text>
                </View>
            </ImageBackground>
            
            <Text style={{
                color:'black',
                fontSize:25,
                marginVertical:10
            }}>
                Description
            </Text>
            
            <Text style={styles.description}>{villa.description}</Text>

            <View style={{flexDirection:'row'}}>
                <Image 
                    source={{ uri: villa.owner_picture || 'https://example.com/placeholder.jpg' }} 
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25, // Optional
                    }}
                />
                <View>
                    <Text style={styles.owner}>
                        {villa.owner}
                    </Text>
                    <Text style={{marginHorizontal:20}}>
                        Owner
                    </Text>
                </View>
            </View>
            
            <Text style={{
                fontSize:20,
                marginVertical:15
            }}>
                Gallery
            </Text>
            <ScrollView
            horizontal={true}
            >
                {
                    villa.images.map((image, index)=>{
                        return(
                            <Image 
                            source = {{uri: image}}
                            key={index}
                            style={{
                                width:80,
                                height:80,
                                marginHorizontal:15,
                                borderRadius:15
                            }}
                            />
                        )
                    })
                }
            </ScrollView>

            <View style={{
                margin:20,
                //borderRadius:15
            }}>
                <Image 
                source = {require('../assets/maps.png')}
                style={{
                    width:'100%',
                    height: 300,
                    borderRadius:15,
                }}
                />
            </View>

            <Text style={{
                color:'black',
                fontSize:18
            }}>
                Price
            </Text>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                <Text style={styles.price}>{villa.price}</Text>
                <TouchableOpacity 
                style={{
                    backgroundColor: '#72c2f0',
                    borderRadius: 15
                }}
                > 
                    <Text style={{
                        padding:10,
                        color: 'white',
                        fontSize:15
                    }}>
                        Rent now
                    </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        height: 350,
        width: '100%',
        //borderRadius: 15, this was moved up inside imageStyle
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Aligns items to the bottom
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'white',
        marginHorizontal:20
    },
    location: {
        fontSize: 18,
        color: 'white',
        marginHorizontal:20,
        marginBottom:10
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
    },
    details: {
        fontSize: 16,
        marginVertical: 5,
        color:'white',
        marginHorizontal:20,
        marginBottom:20
    },
    owner:{
        color:'black',
        fontSize:15,
        marginHorizontal:20,
        marginVertical:5
    }
});

export default DetailsScreen;
