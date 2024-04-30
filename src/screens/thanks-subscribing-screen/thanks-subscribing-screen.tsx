import { View, Text, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { styles } from "./thanks-subscribing-screen-styles";

const subscribeScreen = require("../../assets/images/subscribe-screen.png");
const SubscribingScreenImage = () => {
  useEffect(() => {
    StatusBar.setHidden(true);

    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={subscribeScreen}
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

export default SubscribingScreenImage;
