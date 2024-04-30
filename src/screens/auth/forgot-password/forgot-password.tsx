import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { resetUser } from "../../../utils/api-helper";
const background = require("../../../assets/images/splash-screen.png");

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEnterPress = async () => {
    setEmailError("");


    try {
      await resetUser(email);
      
    } catch (error: any) {
      console.error("Error logging in:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes("email")) {
          setEmailError(errorMessage);
        } 
      }
    }

    if (!email.trim()) {
      setEmailError(
        "We cannot find an account associated with that email address. Please check your spelling,or try another email address."
      );
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.container}>
        <Text style={styles.headingText}>
          Enter the email you used to sign up and we will send a password reset
          link to that address
        </Text>
        <View style={styles.textInputView}>
          <View style={styles.holderView}>
            <Text style={styles.holderText}>Email address</Text>
          </View>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.errorText}>{emailError}</Text>
        </View>
        <TouchableOpacity style={styles.enterButton} onPress={handleEnterPress}>
          <Text style={styles.enterText}>Send</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgotPassword;
