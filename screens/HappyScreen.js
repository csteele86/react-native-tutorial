import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import BasicText from '../components/BasicText';

class HappyScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayValue: 'Hello World',
        };
    }

    onTextChange = (value) => {
        this.setState({ displayValue: value});
        console.log(`Text Change: ${value} `);
    };

    render() {
        const { displayValue } = this.state;

        return (
            <View style={styles.container}>
                <BasicText value={displayValue} />
                <TextInput
                    value={displayValue}
                    placeholder="Enter Some Text"
                    onChangeText={this.onTextChange}
                    style={styles.textInput}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textInput: {
        marginTop: 20,
        borderWidth: 1,
    },
});

export default HappyScreen;
