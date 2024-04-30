import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
const background = require("../../../assets/images/splash-screen.png");
import Icon from "react-native-vector-icons/Entypo";
import Colors from "../../../constants/color";
import { useNavigation } from "@react-navigation/native";
import { signUpUser } from "../../../utils/api-helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = () => {
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigation = useNavigation();

  const handleEnterPress = async () => {
    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Incorrect email address");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Incorrect password");
      return;
    }
    if (!name.trim()) {
      setNameError("Incorrect name");
      return;
    }
         try {
      const response = await signUpUser(email, password);
      navigation.navigate("SignInEmailScreen");
      console.log("TOKEN?>>>>", response.token);
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
        } else if (errorMessage.includes("password")) {
          setPasswordError(errorMessage);
        }
      }
    }

    console.log("Valid Email:", email);
    console.log("Valid Password:", password);
  };

  const handleForgotPassPress = () => {
    navigation.navigate("ForgotPassword");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.heading}>Fantastic Stories</Text>
          <View style={styles.textInputView}>
            <View style={styles.holderView}>
              <Text style={styles.holderText}>Name</Text>
              <Text style={styles.errorText}>{nameError}</Text>
            </View>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.textInputView}>
            <View style={styles.holderView}>
              <Text style={styles.holderText}>Email</Text>
              <Text style={styles.errorText}>{emailError}</Text>
            </View>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.textInputView}>
            <View style={styles.holderView}>
              <Text style={styles.holderText}>Password</Text>
              <Text style={styles.errorText}>{passwordError}</Text>
            </View>
            <View style={styles.passwordInputView}>
              <TextInput
                style={[styles.inputField, { width: "90%", borderWidth: 0 }]}
                secureTextEntry={!showPassword}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Icon
                  name={showPassword ? "eye-with-line" : "eye"}
                  size={30}
                  color={Colors.primary.vividViolet}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={handleForgotPassPress}>
            <Text style={styles.forgotText}>Forgot password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.enterButton}
            onPress={handleEnterPress}
          >
            <Text style={styles.enterText}>Enter</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;
