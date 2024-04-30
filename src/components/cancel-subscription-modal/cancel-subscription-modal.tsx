import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/color";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./cancel-subscription-modal-styles";

interface CancelSubscriptionModalProps {
  visible: boolean;
  onClose: () => void;
}

const CancelSubscriptionModal: React.FC<CancelSubscriptionModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.alertContainer}>
          <View style={styles.firstContainer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>X</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.cancel}>Why are you cancelling?</Text>
            </View>
          </View>
          <View style={styles.touchableContainer}>
            <TouchableOpacity>
              <Text style={styles.firstOption}>Please tap all that apply</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.secondOption}>Don't like the stories</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.secondOption}>Don't like the app</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.thirdOption}>Not worth the money right</Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 21,
                  color: Colors.primary.main,
                }}
              >
                now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.fourthOption}>Other</Text>
            </TouchableOpacity>

            <TextInput
              numberOfLines={10}
              multiline
              style={styles.textInput}
              placeholder="Please add any additional information that may help us improve"
            />
            <TouchableOpacity style={styles.cancelSubBtn}>
              <Text style={styles.cancelBtnText}>Cancel My Subscription</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.discard}>
              <Text style={styles.discardText}>Nevermind!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CancelSubscriptionModal;
