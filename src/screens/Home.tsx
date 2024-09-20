import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image , ImageBackground} from 'react-native';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';

import Header from '../Components/Header';
import DisplayOptions from '../Components/DisplayOptions';
import MoreOptions from '../Components/MoreOptions';

import Icon from 'react-native-ionicons'

const HomeScreen: React.FC = () => {

    const [visible,setVisible] = useState(true)


    return (
        <ScrollView>
            {/* Header */}
            <Header setVisible={setVisible} visible={visible}/>
            {/* Main Area */}
            
            
            {visible && <DisplayOptions />}
            
            <View style={{flexDirection:'row'}}>
                <Text
                style={{
                    color:'black',
                    fontSize:18,
                    margin:10,
                    //add font family
                }}
                >
                    Best for you
                </Text>
                {
                    !visible && <TouchableOpacity onPress={() => setVisible(true)}>
                    <Text style={{
                    color:'black',
                    fontSize:18,
                    margin:10,
                    //add font family
                }}
                >
                        Show more
                    </Text>
                </TouchableOpacity>
                }
                
            </View>
            

            <MoreOptions />


        </ScrollView>
    );
};

export default HomeScreen;
//connect hitslop to a specific class