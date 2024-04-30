import React from "react";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import { styles } from "./styles";

interface CancelModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  pauseText?: boolean;
}

const DeleteCardModal: React.FC<CancelModalProps> = ({
  isVisible,
  onClose,
  onSubmit,
}) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {
            <Text style={styles.modalText}>
              Are you sure you want to delete payment method?
            </Text>
          }
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={onSubmit}>
              <Text style={styles.modalButtonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteCardModal;
