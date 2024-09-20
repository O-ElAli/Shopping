import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-ionicons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'




const countries = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Australia', value: 'au' },
    { label: 'India', value: 'in' },
    // Add more countries as needed
];

/*

setVisible:

    Type: React.Dispatch<React.SetStateAction<boolean>>
    This is a function type that comes from React. It represents a setter function (similar to the one returned by useState).
    React.Dispatch<React.SetStateAction<boolean>> is a fancy way of saying: "This is a function that takes a new value (or a function that returns a value) to update a boolean state."
    In simpler terms, setVisible is a function used to change the visible state, typically used to show or hide UI components.

*/

const HeaderArea: React.FC<{ setVisible: React.Dispatch<React.SetStateAction<boolean>>, visible: boolean }> = ({ setVisible, visible }) =>  {
    const [selectedCountry, setSelectedCountry] = useState('au');
    const [selectedArea, setSelectedArea] = useState<string | null>(null);


    const handleAreaPress = (area: string) => {
        setSelectedArea(area);
    };

    return (
        <View>
            <Text style={{ margin: 10 }}>Location</Text>
            <View style={{
                marginLeft: 10,
                flexDirection: 'row',
                justifyContent: 'space-between', // Add this to distribute the space
                alignItems: 'center', // Vertically center items
            }}>
                <Picker
                    selectedValue={selectedCountry}
                    onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                    style={{ width: '50%' }}
                >
                    {countries.map((country) => (
                        <Picker.Item
                            key={country.value}
                            label={country.label}
                            value={country.value}
                        />
                    ))}
                </Picker>
                <Icon name="ios-notifications-outline" size={30} color="#000" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    placeholder='Search address, or near you'
                    style={{
                        color: 'black',
                        fontSize: 15,
                        backgroundColor: '#f7f7f7',
                        margin: 10,
                        borderRadius: 10,
                        width: '70%',
                        paddingHorizontal:20
                    }}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#72c2f0',
                        width: 60,
                        height: 60,
                        margin: 5,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={()=>{setVisible(false)}}
                >
                    <Text
                    style={{
                        color:'white'
                    }}
                    >Search</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                <Areas name="House" isSelected={selectedArea === "House"} onPress={() => handleAreaPress("House")} />
                <Areas name="Apartment" isSelected={selectedArea === "Apartment"} onPress={() => handleAreaPress("Apartment")} />
                <Areas name="Hotel" isSelected={selectedArea === "Hotel"} onPress={() => handleAreaPress("Hotel")} />
                <Areas name="Villa" isSelected={selectedArea === "Villa"} onPress={() => handleAreaPress("Villa")} />
                <Areas name="Complex" isSelected={selectedArea === "Complex"} onPress={() => handleAreaPress("Complex")} />
            </ScrollView>
        </View>
    );
};

type AreaTypes = {
    name: string;
    isSelected: boolean;
    onPress: () => void;
};

const Areas: React.FC<AreaTypes> = ({ name, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            style={[headerStyle.areas, isSelected && headerStyle.selectedArea]}
            onPress={onPress}
        >
            <Text style={isSelected ? headerStyle.selectedText : headerStyle.text}>
                {name}
            </Text>
        </TouchableOpacity>
    );
};

const headerStyle = StyleSheet.create({
    areas: {
        backgroundColor: '#e0e0e0', // Inactive state color
        padding: 12,
        margin: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedArea: {
        backgroundColor: '#72c2f0',
        elevation:10 // Active state color
    },
    text: {
        color: 'black', // Inactive state text color
    },
    selectedText: {
        color: 'white', // Active state text color
    }
});

export default HeaderArea;
