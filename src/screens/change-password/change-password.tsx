import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CommonHeader from "../../components/common-header/common-header";
import SearchBar from "../../components/search-components/search-components";
import CustomAlert from "./custom-alert";
import { styles } from "./change-password-styles";

const prevBtn = require("../../assets/icons/prevBtn.png");

const ChangePassword = () => {
  const navigation = useNavigation();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const toggleShowPassword = (field: string) => {
    switch (field) {
      case "current":
        setShowCurrentPassword((prev) => !prev);
        break;
      case "new":
        setShowNewPassword((prev) => !prev);
        break;
      case "confirm":
        setShowConfirmPassword((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <SafeAreaView>
      <View>
        <CommonHeader showSubscriptionButton={false} />
        <SearchBar />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={handleBackBtnPress}
        >
          <Image source={prevBtn} style={styles.backImage} />
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Change Password</Text>
        <View></View>
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.nameFieldText}>Current Password</Text>
        <View style={styles.textInput}>
          <TextInput
            value={currentPassword}
            onChangeText={setCurrentPassword}
            style={styles.input}
            secureTextEntry={!showCurrentPassword}
          />
          <MaterialCommunityIcons
            name={showCurrentPassword ? "eye-off" : "eye"}
            size={24}
            color="#5C23F9"
            onPress={() => toggleShowPassword("current")}
          />
        </View>
        <Text style={styles.nameFieldText}>New Password</Text>
        <View style={styles.textInput}>
          <TextInput
            value={newPassword}
            onChangeText={setNewPassword}
            style={styles.input}
            secureTextEntry={!showNewPassword}
          />
          <MaterialCommunityIcons
            name={showNewPassword ? "eye-off" : "eye"}
            size={24}
            color="#5C23F9"
            onPress={() => toggleShowPassword("new")}
          />
        </View>
        <Text style={styles.nameFieldText}>Confirm Password</Text>
        <View style={styles.textInput}>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            secureTextEntry={!showConfirmPassword}
          />
          <MaterialCommunityIcons
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={24}
            color="#5C23F9"
            onPress={() => toggleShowPassword("confirm")}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleShowAlert}
          style={styles.changePasswordBtn}
        >
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>

        <CustomAlert
          visible={showAlert}
          visible={showAlert}
          onClose={handleCloseAlert}
          message={""}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
