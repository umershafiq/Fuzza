import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import HomeScreen from "./HomeScreen";
import { TextInput, Text, View, StyleSheet } from "react-native";

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Address"
                />

                <TextInput
                    style={styles.inputStyle}
                    placeholder="City"
                />

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Postcode"
                />
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "700",
                        paddingHorizontal: 20
                    }}
                    onPress={() => { Actions.HomeScreen(); }}>Click here to Navigate</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: 400
    },
    inputStyle: {
        minHeight: 80,
        width: 360,
        backgroundColor: "white",
        margin: 5,
        padding: 30,
        alignSelf: "center",
        borderColor: "white",
        borderWidth: 1
    }
});
