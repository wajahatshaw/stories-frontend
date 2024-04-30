import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubscribeScreenStyles } from "./subscribe-screen-styles";
import CommonHeader from "../../components/common-header/common-header";
import SearchBar from "../../components/search-components/search-components";
import { useNavigation } from "@react-navigation/native";
import DiscountCode from "./discount-code-modal";
import Colors from "../../constants/color";
import { applyDiscount } from "../../utils/api-helper";
import { useDispatch } from "react-redux";
import { setPlan } from "../../redux/subscriptionPlanSlice";

const backgroud = require("../../assets/images/background.png");
const backBtn = require("../../assets/icons/back.png");
const paymentBtn = require("../../assets/icons/paymentbtn.png");

const SubscribeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [oneWeek, setOneWeek] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [discountCode, setDiscountCode] = useState("");
  const dispatch = useDispatch()
 
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const navigation = useNavigation();
  const handleBackBtn = () => {
    navigation.goBack();
  };

  const handleOneWeekPress = useCallback(() => {
    setOneWeek(false);
    setOneYear(true);
    dispatch(setPlan('annual'))
  }, [oneYear]);

  const handleOneYearPress = useCallback(() => {
    setOneYear(false);
    setOneWeek(true);
    dispatch(setPlan('weekly'))
  }, [oneWeek]);

  const handSelectPaymentMethodPress = () => {
    navigation.navigate('UpdatePaymentMethod')
  }

  const handleCheckoutPress = () => {
    navigation.navigate('CheckOut')
  }

  const handleDiscountCodeChange = useCallback((text: string) => {    
    setDiscountCode(text);
  }, []);

  const discountApply = useCallback(async () => {
    try {
      const response = await applyDiscount(discountCode);
      console.log("Discount applied successfully percentage is!", response);
    } catch (error) {
      console.error("Error applying discount:", error);
    }
  }, [discountCode]);

  return (
    <ScrollView>
    <SafeAreaView>
      <ImageBackground
        source={backgroud}
        style={SubscribeScreenStyles.container}
      >
        <View style={SubscribeScreenStyles.header}>
          <CommonHeader showSubscriptionButton={false} />
          <SearchBar />
        </View>
        <View>
          <Text style={SubscribeScreenStyles.subscribe}>
            Subscribe to Fantastic Stories
          </Text>
        </View>
        <View style={SubscribeScreenStyles.sub}>
          <TouchableOpacity
            style={SubscribeScreenStyles.back}
            onPress={handleBackBtn}
          >
            <Image source={backBtn} />
            <Text style={SubscribeScreenStyles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={SubscribeScreenStyles.chooseSubText}>
            Choose your Subscription
          </Text>
          <View></View>
          <View></View>
        </View>
        <View style={SubscribeScreenStyles.Plan}>
          <View style={SubscribeScreenStyles.choosePlan}>
            <TouchableOpacity
              style={[
                SubscribeScreenStyles.weeklyView,
                {
                  backgroundColor: oneWeek
                    ? "transparent"
                    : Colors.primary.main,
                },
              ]}
              onPress={handleOneWeekPress}
            >
              <Text
                style={[
                  SubscribeScreenStyles.weeklyText,
                  {
                    color: oneWeek ? Colors.primary.main : Colors.primary.white,
                  },
                ]}
              >
                $1/week
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                SubscribeScreenStyles.yearly,
                {
                  backgroundColor: oneYear
                    ? "transparent"
                    : Colors.primary.main,
                },
              ]}
              onPress={handleOneYearPress}
            >
              <Text
                style={[
                  SubscribeScreenStyles.yearlyText,
                  {
                    color: oneYear ? Colors.primary.main : Colors.primary.white,
                  },
                ]}
              >
                $39/year
              </Text>
            </TouchableOpacity>
            <View style={SubscribeScreenStyles.percent}>
              <Text style={SubscribeScreenStyles.percentText}>25% off</Text>
            </View>
          </View>
        </View>
        <Text style={SubscribeScreenStyles.free}>First 2 weeks free</Text>
        <TouchableOpacity style={SubscribeScreenStyles.discount}>
          <Text style={SubscribeScreenStyles.discountText}>
            Enter discount code
          </Text>
          <TextInput
            style={SubscribeScreenStyles.TextInput}
            placeholder="If you have one"
            placeholderTextColor={"#5C23F9"}
            value={discountCode}
            onChangeText={handleDiscountCodeChange}
          />
          <View>
            <TouchableOpacity
              style={SubscribeScreenStyles.discountButton}
              onPress={discountApply}
            >
              <Text style={SubscribeScreenStyles.discountButtonText}>
                Enter discount code
              </Text>
            </TouchableOpacity>
            <DiscountCode
              visible={modalVisible}
              text="Discount Code Applied"
              onPress={toggleModal}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={SubscribeScreenStyles.pay} onPress={handSelectPaymentMethodPress}>
          <View style={SubscribeScreenStyles.paymentContainer}>
            <Text style={SubscribeScreenStyles.payText}>
              Select payment method
            </Text>
            <Image source={paymentBtn} style={SubscribeScreenStyles.image} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            SubscribeScreenStyles.pay,
            { marginTop: 20, justifyContent: "center" },
          ]}
          onPress={handleCheckoutPress}
        >
          <View
            style={[
              SubscribeScreenStyles.paymentContainer,
              { gap: 10, justifyContent: "center" },
            ]}
          >
            <Text style={SubscribeScreenStyles.payText}>Checkout</Text>
            <Image source={paymentBtn} style={SubscribeScreenStyles.image} />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
    </ScrollView>
  );
};

export default SubscribeScreen;
