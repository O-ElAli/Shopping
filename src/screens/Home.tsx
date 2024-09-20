import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Header from '../Components/Header';
import DisplayOptions from '../Components/DisplayOptions';
import MoreOptions from '../Components/MoreOptions';

const HomeScreen: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');  // Add search query state

    return (
        <ScrollView>
            {/* Header */}
            <Header setVisible={setVisible} visible={visible} setSearchQuery={setSearchQuery} />

            {/* Main Area */}
            {visible && <DisplayOptions />}

            <View style={{ flexDirection: 'row' }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        margin: 10,
                    }}
                >
                    Best for you
                </Text>
                {
                    !visible && (
                        <TouchableOpacity onPress={() => setVisible(true)}>
                            <Text style={{
                                color: 'black',
                                fontSize: 18,
                                margin: 10,
                            }}>
                                Show more
                            </Text>
                        </TouchableOpacity>
                    )
                }
            </View>

            {/* Pass searchQuery to MoreOptions */}
            <MoreOptions searchQuery={searchQuery} />

        </ScrollView>
    );
};

export default HomeScreen;
