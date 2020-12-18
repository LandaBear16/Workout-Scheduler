import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Screen from "../components/Screen";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcomeScreen.jpg")}
    >
    <Screen style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/bearFitness.png")} />
      </View>
      <View style={styles.buttonsContainer}>
        
      </View>
    </Screen>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 150,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
