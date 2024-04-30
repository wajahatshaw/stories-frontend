import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import CommonHeader from "../../../components/common-header/common-header";
import SearchBar from "../../../components/search-components/search-components";
import { Styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../constants/color";

const paypal = require("../../../assets/icons/paypal.png");
const google = require("../../../assets/icons/Google.png");
const apple = require("../../../assets/icons/apple-logo.png");
const creditCard = require("../../../assets/icons/credit-card.png");
const prevBtn = require("../../../assets/icons/prevBtn.png");

const AddCard = () => {
  const navigation = useNavigation();

  const handleBackIconPress = () => {
    navigation.goBack();
  };

  const handleCreditCArdPress = () => {
    navigation.navigate("UpdatePaymentMethod");
  };

  const handleApplePayPress = () => {
    navigation.navigate("ApplePayScreen");
  };

  return (
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
        <Text style={Styles.manageText}>Select payment method</Text>
      </View>
      <TouchableOpacity
        style={Styles.optionsContainer}
        onPress={handleCreditCArdPress}
      >
        <Image
          source={creditCard}
          style={[Styles.optionIcon, { transform: [{ scale: 1.9 }] }]}
        />
        <Text style={[Styles.optionText, { marginLeft: 30 }]}>Credit card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleApplePayPress}
        style={[
          Styles.optionsContainer,
          { backgroundColor: Colors.primary.black },
        ]}
      >
        <Image source={apple} style={Styles.optionIcon} />
        <Text style={[Styles.optionText, { fontWeight: "bold" }]}>Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          Styles.optionsContainer,
          { backgroundColor: Colors.primary.lightGrey },
        ]}
      >
        <Image source={google} style={Styles.optionIcon} />
        <Text
          style={[
            Styles.optionText,
            { fontWeight: "bold", color: Colors.primary.grey },
          ]}
        >
          Pay
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          Styles.optionsContainer,
          { backgroundColor: Colors.primary.white },
        ]}
      >
        <Image source={paypal} style={Styles.optionIcon} />
        <Text
          style={[
            Styles.optionText,
            { fontWeight: "bold", color: Colors.primary.main },
          ]}
        >
          PayPal
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddCard;
