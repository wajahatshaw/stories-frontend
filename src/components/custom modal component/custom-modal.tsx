import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./custom-modal-component-styles";

interface CustomAlertProps {
  visible: boolean;
  text: string;
  onPress: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  text,
  onPress,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.alertContainer}>
          <Text style={styles.messageText}>{text}</Text>

          <TouchableOpacity onPress={onPress}>
            <Text style={styles.okButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
