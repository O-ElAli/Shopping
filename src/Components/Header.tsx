
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ScrollView, TextInput } from 'react-native-gesture-handler';



const countries = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Australia', value: 'au' },
    { label: 'India', value: 'in' },
    // Add more countries as needed
];

const HeaderArea = () => {

    const [selectedCountry, setSelectedCountry] = useState('au');

    return(
        <View>
            <Text style={{
                margin:10
            }}>
                Location
            </Text>
            <View style={{
                marginLeft: 10,
                flexDirection:'row',
                justifyContent: 'space-between', // Add this to distribute the space
                alignItems: 'center',            // Vertically center items
            }}
            
            >
                <Picker
                    selectedValue={selectedCountry}
                    onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                    style={{
                        width: '50%'
                    }}
                >
                    {countries.map((country) => (
                        <Picker.Item
                            key={country.value}
                            label={country.label}
                            value={country.value}
                        />
                    ))}
                </Picker>
                {/* <FontAwesomeIcon icon={'bell-concierge'} /> */}
                <Text>
                    Icon
                </Text>
            </View>
            <View
            style={{
                flexDirection:'row'
            }}
            >
                <TextInput
                placeholder='Search address, or near you'
                
                style={{
                    color:'black',
                    fontSize:15,
                    backgroundColor:'#e0e0de',
                    margin:10,
                    borderRadius:10,
                    width:'70%'
                }}
                />
                <TouchableOpacity
                style={{
                    backgroundColor:'#4bbbfa',
                    width: 70,
                    height: 70,
                    margin: 5,
                    borderRadius:15,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Text>
                        Filters
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
            horizontal={true}
            >
                <Areas name="House" />
                <Areas name="Apartment" />
                <Areas name="Hotel" />
                <Areas name="Villa" />
                <Areas name="Complex" />

                </ScrollView>
        </View>
    )
}

type AreaTypes = {
    name:string;
}
//TS types need to be explicitly defined

const Areas:React.FC<AreaTypes> = ({name}) =>{
    return(
        <TouchableOpacity
        style={headerStyle.areas}
        >
            <Text
            style={{
                color:'white'
            }}
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}

const headerStyle = StyleSheet.create({
    areas:{
        backgroundColor:'#4bbbfa',
        height:40,
        width:80,
        margin: 10,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center' 
    }
})

export default HeaderArea;