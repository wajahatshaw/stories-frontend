import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const background = require("../../../assets/images/splash-screen.png");

const SocialLoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.heading}>Fantastic Stories</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("SignInEmailScreen");
              }}
            >
              <Text style={styles.buttonText}>Sign in with email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.fbbutton]}>
              <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.googlebutton]}>
              <Text style={styles.buttonText}>Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.applebutton]}>
              <Text style={[styles.buttonText, styles.applebutton]}>Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SocialLoginScreen;
