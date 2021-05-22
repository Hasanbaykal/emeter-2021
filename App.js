

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class customfont extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welkom, 
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontFamily: "KoHo-Bold",
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    fontFamily: "KoHo-Light",
    fontSize: 20,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("customfont", () => customfont);
