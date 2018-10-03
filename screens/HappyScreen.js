import React, { Component } from 'react';
import { View } from 'react-native';
import BasicText from '../components/BasicText';

class HappyScreen extends Component {

    render() {
        return (
            <View>
                <BasicText value="Hello World"/>
            </View>
        );
    }
}

export default HappyScreen;
