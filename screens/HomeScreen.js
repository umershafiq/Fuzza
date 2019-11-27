import React, { Component } from 'react'
import {
    View,
    TextInput,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet
}
    from "react-native";

import Events from "./Events";
import Posts from "./Posts";



export default class HomeScreen extends Component {
    render() {
        return (

            <ScrollView >
                <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        backgroundColor: "white",
                        height: 80,
                        borderBottomWidth: 1,
                        borderBottomColor: "#dddddd"
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            padding: 10,
                            backgroundColor: "white",
                            marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: "black",
                            shadowOpacity: 0.2
                        }}>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Try ChiangMai"
                            placeholderTextColor="grey"
                            style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
                        />

                    </View>
                </View>
                </SafeAreaView>
                <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "700",
                            paddingHorizontal: 20
                        }}
                    >Events Feed</Text>
                </View>

                <View style={{ height: 130, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Events
                            imageUri={require("../images/concert.jpg")}
                            name="IUVoice Concert 2020"
                        />
                        <Events
                            imageUri={require("../images/holi.jpg")}
                            name="MAJU Holi 2020"
                        />
                        <Events
                            imageUri={require("../images/talk.jpg")}
                            name="FAST-NU Ted Talks"
                        />
                    </ScrollView>
                </View>

                <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20, marginTop: 40 }}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "700",
                            paddingHorizontal: 20
                        }}
                    >News Feed</Text>
                </View>
                <Posts/>
            </ScrollView>
        );
    }

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

