import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ContactInfoTextInput from "../../components/contact-info-textinput/contact-info-textinput";
import ContactInfoBtn from "../../components/contact-info-btn/contact-info-btn";
import ContactInfoHeader from "../../components/contact-info-header/contact-info-header";
import CommonHeader from "../../components/common-header/common-header";
import SearchBar from "../../components/search-components/search-components";

const ContactInfo = () => {
  return (
    <SafeAreaView>
      <View>
        <CommonHeader showSubscriptionButton={false} />
        <SearchBar />
        <ContactInfoHeader />
        <ContactInfoTextInput />
        <ContactInfoBtn />
      </View>
    </SafeAreaView>
  );
};

export default ContactInfo;
