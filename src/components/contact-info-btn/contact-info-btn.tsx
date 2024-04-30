import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./contact-info-btn-styles";
import { useNavigation } from "@react-navigation/native";

const ContactInfoBtn = () => {
  const navigation = useNavigation();

  const handleChangePasswordPress = () => {
    navigation.navigate("ChangePassword");
  };
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={handleChangePasswordPress}>
        <Text style={styles.changePassword}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveBtn}>
        <Text style={styles.saveColorText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactInfoBtn;
