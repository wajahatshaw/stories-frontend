import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./contact-info-header-styles";
import { useNavigation } from "@react-navigation/native";

const prevBtn = require("../../assets/icons/prevBtn.png");
const contact = require("../../assets/icons/contact.png");

const ContactInfoHeader = () => {
  const navigation = useNavigation();

  const handleBackBtn = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.contactInfo}>
      <View>
        <TouchableOpacity style={styles.back} onPress={handleBackBtn}>
          <Image source={prevBtn} style={styles.backImage} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contact}>
        <Text style={styles.contactInfoText}>Contact Info</Text>
        <TouchableOpacity>
          <Image source={contact} style={styles.image} tintColor={"#000"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactInfoHeader;
