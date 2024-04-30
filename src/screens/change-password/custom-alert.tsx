import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./custom-alerts-styles";

interface CustomAlertProps {
  visible: boolean;
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  message,
  onClose,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.alertContainer}>
          <Text style={styles.messageText}>
            Your password has been changed
            <Text style={styles.success}> successfully</Text>
          </Text>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.okButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
