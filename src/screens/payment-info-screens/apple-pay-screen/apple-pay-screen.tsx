import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Styles } from "./apple-pay-screen-styles";
import CommonHeader from "../../../components/common-header/common-header";
import Colors from "../../../constants/color";
import SearchBar from "../../../components/search-components/search-components";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const apple = require("../../../assets/icons/apple-logo.png");
const prevBtn = require("../../../assets/icons/prevBtn.png");

const ApplePayScreen = () => {
  const navigation = useNavigation();
  const handleBackIconPress = () => {
    navigation.goBack();
  };

  const handleUpdatePayment = () => {
    navigation.navigate("UpdatePaymentCardDetails");
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
        style={[
          Styles.optionsContainer,
          { backgroundColor: Colors.primary.black },
        ]}
      >
        <Image source={apple} style={Styles.optionIcon} />
        <Text style={[Styles.optionText, { fontWeight: "bold" }]}>Pay</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={Styles.updatePayment}
          onPress={handleUpdatePayment}
        >
          <Text style={Styles.updatePaymentMethodText}>
            Update payment method
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ApplePayScreen;
