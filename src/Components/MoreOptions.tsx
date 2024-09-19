

import React from 'react'
import {View , Text, ScrollView, ImageBackground } from 'react-native'

import { Villa } from '../assets/DB'


const MoreOptions = () => {
    return(
        
        Villa.map((villa,index) => {
            return(
                <View key = {index}>
                    
                </View>
            )
        })
    )
}



export default MoreOptions