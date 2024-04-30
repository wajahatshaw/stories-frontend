import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

interface DiscountCodeProps {
  visible: boolean;
  text: string;
  onPress: () => void;
}

const DiscountCode: React.FC<DiscountCodeProps> = ({
  visible,
  text,
  onPress,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.alertContainer}>
          <Text style={styles.messageText}>{text}</Text>
          <Text style={styles.firstLine}>
            You will receive a <Text style={styles.blueText}>50% discount</Text>
            <Text> for your first </Text>
            <Text style={styles.blueText}>4 billed weeks</Text>.
          </Text>

          <TouchableOpacity onPress={onPress}>
            <Text style={styles.okButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DiscountCode;
export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(151, 151, 151, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertContainer: {
    backgroundColor: "white",
    borderRadius: 32,
    padding: 20,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
  },
  messageText: {
    fontSize: 21,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "BaiJamjureeRegular",
  },
  okButtonText: {
    color: "#7D89FF",

    fontFamily: "BaiJamjureeRegular",
    fontSize: 17,
  },
  success: {
    color: "#5C23F9",
  },

  firstLine: {
    fontSize: 17,
    fontFamily: "BaiJamjureeRegular",

    textAlign: "center",
  },
  blueText: {
    color: "blue",
    fontFamily: "BaiJamjureeRegular",
  },
});
