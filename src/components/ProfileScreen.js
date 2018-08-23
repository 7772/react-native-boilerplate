import React, {Component} from 'react';
import { View,  Text, } from 'react-native';

import { SafeAreaView, } from 'react-navigation';

import { SharedStyles, ProfileStyles, } from '../styles';

class ProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView style={SharedStyles.ProfileStyles}>
                <Text style={ProfileStyles.mainText}>ProfileScreen</Text>
            </SafeAreaView>
        );
    }
}

export default ProfileScreen; 