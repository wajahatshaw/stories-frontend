import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "./styles";
import CommonHeader from "../../components/common-header/common-header";
import SearchBar from "../../components/search-components/search-components";
import Colors from "../../constants/color";
import CancelSubscriptionModal from "../../components/cancel-subscription-modal/cancel-subscription-modal";
import { ScrollView } from "react-native-gesture-handler";

const prevBtn = require("../../assets/icons/prevBtn.png");
const book = require("../../assets/icons/book.png");
const paint = require("../../assets/icons/paint.png");
const card = require("../../assets/icons/card.png");
const contactInfo = require("../../assets/icons/contact-info.png");
const sign = require("../../assets/icons/sign.png");

const ManageAccount = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Check user login status when component mounts
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const userLoggedIn = await AsyncStorage.getItem("userLoggedIn");
    setIsLoggedIn(userLoggedIn === "true");
  };

  const handleBackIconPress = () => {
    navigation.goBack();
  };

  const contactInfoHandlePress = () => {
    navigation.navigate("ContactInfo");
  };

  const handlePress = () => {
    navigation.navigate("SubscribingScreenImage");
  };

  const handlePaymentInfoPress = async () => {
    if (isLoggedIn) {
      navigation.navigate("AddCard");
    } else {
      navigation.navigate("SignInEmailScreen");
    }
  };

  const handleSignButtonPress = async () => {
    if (isLoggedIn) {
      // Sign out logic
      await AsyncStorage.clear();
      console.log("Async storage cleared successfully.")
      setIsLoggedIn(false);
      navigation.navigate("Home"); // Navigate to home screen after sign out
    } else {
      navigation.navigate("SignInEmailScreen");
    }
  };

  const handleCloseAlert = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView>
    <SafeAreaView style={Styles.container}>
      <CommonHeader showSubscriptionButton={false} />
      <SearchBar />
      <View style={Styles.backButtonContainer}>
        <TouchableOpacity
          style={Styles.backTouchable}
          onPress={handleBackIconPress}
        >
          <Image source={prevBtn} style={Styles.backIcon} />
          <Text style={Styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={Styles.manageText}>Manage account</Text>
      </View>
      <View>
        <TouchableOpacity style={[Styles.optionsContainer, { borderWidth: 0 }]}>
          <Image source={book} />
          <Text style={Styles.optionText}>Subscription</Text>
        </TouchableOpacity>
        <CancelSubscriptionModal
          visible={modalVisible}
          onClose={handleCloseAlert}
        />
      </View>
      <TouchableOpacity
        style={[
          Styles.optionsContainer,
          { backgroundColor: Colors.primary.lightGrey },
        ]}
        onPress={handlePress}
      >
        <Image source={paint} />
        <Text style={Styles.optionText}>Display theme</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.optionsContainer}
        onPress={handlePaymentInfoPress}
      >
        <Image source={card} />
        <Text style={Styles.optionText}>Payment info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          Styles.optionsContainer,
          { backgroundColor: Colors.primary.lightGrey },
        ]}
        onPress={contactInfoHandlePress}
      >
        <Image source={contactInfo} />
        <Text style={Styles.optionText}>Contact info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.signContainer}
        onPress={handleSignButtonPress}
      >
        <Image source={sign} />
        <Text style={[Styles.optionText, { marginLeft: 10 }]}>
          {isLoggedIn ? "Sign Out" : "Sign In"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  );
};

export default ManageAccount;
