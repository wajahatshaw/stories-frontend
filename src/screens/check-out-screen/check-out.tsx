import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React, { useCallback } from "react";
import { Styles } from "./styles";
import CommonHeader from "../../components/common-header/common-header";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/color";
import { subscription } from "../../utils/api-helper";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const backgroud = require("../../assets/images/background.png");
const backBtn = require("../../assets/icons/back.png");

const CheckOut = () => {
  const navigation = useNavigation();
  const Plan = useSelector((state: RootState) => state.subscriptionPlan.value)

  const handleBackBtn = () => {
    navigation.goBack();
  };

   const handleCheckoutPress = useCallback(async () => {
     try {
       const response = await subscription(Plan);
       console.log("Subscription plan is set to", response);
     } catch (error) {
       console.error("Error setting subscription plan:", error);
     }
   }, [Plan]);

  return (
    <SafeAreaView>
      <ImageBackground source={backgroud} style={Styles.container}>
        <View style={Styles.header}>
          <CommonHeader showSubscriptionButton={false} />
        </View>
        <View style={Styles.sub}>
          <TouchableOpacity style={Styles.back} onPress={handleBackBtn}>
            <Image source={backBtn} />
            <Text style={Styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={Styles.subscribe}>Test 321!!</Text>
        </View>
        <View style={Styles.orderView}>
          <Text style={Styles.orderSummaryText}>Order summary</Text>
          <View style={Styles.basicView}>
            <Text style={Styles.basicText}>basic x1</Text>
            <Text style={Styles.basicText}>$9.50</Text>
          </View>
          <View style={Styles.basicView}>
            <Text style={Styles.basicText}>Taxes and Fees</Text>
            <Text style={Styles.basicText}>$1.58</Text>
          </View>
        </View>
        <View style={Styles.totalView}>
          <Text style={Styles.totalText}>Total</Text>
          <Text style={Styles.totalPriceText}>$11.80</Text>
        </View>
        <TouchableOpacity
          style={[Styles.pay, { marginTop: 50, justifyContent: "center" }]}
          onPress={handleCheckoutPress}
        >
          <View style={[Styles.paymentContainer, { justifyContent: "center" }]}>
            <Text style={Styles.payText}>Checkout</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CheckOut;
