import React, {Component} from 'react';
import { View,  Text, } from 'react-native';

import { SafeAreaView, } from 'react-navigation';

import { SharedStyles, HomeStyles, } from '../styles';

class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={SharedStyles.safeAreaView}>
                <Text style={HomeStyles.mainText}>HomeScreen</Text>
            </SafeAreaView>
        );
    };
};

export default HomeScreen;