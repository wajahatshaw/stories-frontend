import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CommonHeaderStyle } from "./common-header.styles";
import {
  CommonActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import SubscribeScreen from "../../screens/subscribe-screen/subscribe-screen";

const prevBtn = require("../../assets/icons/prevBtn.png");
const contact = require("../../assets/icons/contact.png");
const nextBtn = require("../../assets/icons/nextbtn.png");
interface CommonHeaderProps {
  showSubscriptionButton?: boolean;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  showSubscriptionButton = true,
}) => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleSubscribePress = () => {
    navigation.navigate("SubscribeScreen");
  };

  const handleAccountPress = () => {
    navigation.navigate("ManageAccount");
  };

  return (
    <View style={CommonHeaderStyle.container}>
      <TouchableOpacity>
        <Image source={prevBtn} style={CommonHeaderStyle.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAccountPress}>
        <Image source={contact} style={CommonHeaderStyle.icon} />
      </TouchableOpacity>
      {showSubscriptionButton && (
        <TouchableOpacity
          style={CommonHeaderStyle.subsBtn}
          onPress={handleSubscribePress}
        >
          <Text style={CommonHeaderStyle.subsBtnText}>Subscription</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity>
        <Image source={nextBtn} style={CommonHeaderStyle.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;
