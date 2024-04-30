import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import HomeScreen from "./src/screens/home-screen/home-screen";
import StoryMain from "./src/screens/story-main/story-main";
import Navigator from "./src/navigation/navigator";
import SocialLoginScreen from "./src/screens/auth/social-login/social-login-screen";
import SignInEmailScreen from "./src/screens/auth/signin-with-email/signin-email";
import StorySearch from "./src/screens/story-search-screen/story-search";
import ForgotPassword from "./src/screens/auth/forgot-password/forgot-password";
import ManageAccount from "./src/screens/manage-account-screen/manage-account";
import SubscribeScreen from "./src/screens/subscribe-screen/subscribe-screen";
import ContactInfo from "./src/screens/contact-info/contact-info";
import ChangePassword from "./src/screens/change-password/change-password";
import SubscribingScreenImage from "./src/screens/thanks-subscribing-screen/thanks-subscribing-screen";
import SavedStoriesScreen from "./src/screens/saved-stories-screen/saved-stories";
import AddCard from "./src/screens/payment-info-screens/add-card-screen/add-card";
import UpdatePaymentMethod from "./src/screens/payment-info-screens/update-card-screen/update-payment-method";
import { SQIPCore } from "react-native-square-in-app-payments";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashLoader from "./src/components/splash-loader/splash-loader";
import * as Constants from "expo-constants"
import CheckOut from "./src/screens/check-out-screen/check-out";
import SignUp from "./src/screens/auth/signup/signup";
import { Provider } from 'react-redux';
import { store } from "./src/redux/store";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    SQIPCore.setSquareApplicationId(Constants.default.expoConfig?.extra?.SQUARE_APP_ID ?? '')
  }, [])

  const [fontsLoaded] = useFonts({
    BaiJamjuree: require("./src/assets/fonts/BaiJamjuree-Bold.ttf"),
    BaiJamjureeRegular: require("./src/assets/fonts/BaiJamjuree-Regular.ttf"),
    WonderWorldPersonal: require("./src/assets/fonts/WonderworldPersonalUseRegular-gxdo3.otf"),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserAuthentication = async () => {
    try {
      const userLoggedIn = await AsyncStorage.getItem("userLoggedIn");
      setIsLoggedIn(userLoggedIn === "true");
    } catch (error) {
      console.error("Error checking user authentication:", error);
    }
  };
  useEffect(() => {
    checkUserAuthentication();
  }, []);

  if (!fontsLoaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <>
    {!showSplash ? ( 
    <GestureHandlerRootView style={{flex: 1}}>
       <Provider store={store}>
    <NavigationContainer>
      
      <StatusBar backgroundColor="blue" />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName= {"Home"}> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Stories" component={StoryMain} />
        <Stack.Screen name="bottomNavigator" component={Navigator} />
        <Stack.Screen name="StorySearch" component={StorySearch} />
        <Stack.Screen name="SocialLoginScreen" component={SocialLoginScreen} />
        <Stack.Screen name="SignInEmailScreen" component={SignInEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ManageAccount" component={ManageAccount} />
        <Stack.Screen name="SubscribeScreen" component={SubscribeScreen} />
        <Stack.Screen name="SavedStoriesScreen" component={SavedStoriesScreen} />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen
          name="SubscribingScreenImage"
          component={SubscribingScreenImage}
        />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="UpdatePaymentMethod" component={UpdatePaymentMethod} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </GestureHandlerRootView>
    ) 
    : <SplashLoader/>
    }
  </>
  );
}
