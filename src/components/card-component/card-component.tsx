import { View, ActivityIndicator, Text, Alert } from "react-native";
import React, { useCallback, useState } from "react";
import Colors from "../../constants/color";
import { ICard } from "../../core/types";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { removePaymentCard } from "../../utils/api-helper";
import DeleteCardModal from "./delete-card-modal";

interface CardItemProps {
  item: ICard;
  isChecked?: any;
  onRadioButtonPress?: any;
  getCardFirebase?: () => Promise<void>;
}
const CardComponent: React.FC<CardItemProps> = ({
  item,
  isChecked,
  onRadioButtonPress,
  getCardFirebase,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClosePressed = useCallback(async () => {
    try {
      setLoading(true)      
      await removePaymentCard(item.id || '')
      getCardFirebase
    } catch (error) {
      alert(error)
      console.error('Error deleting customer card:', error)
    } finally {
      setLoading(false)
  }
  }, [item.id])

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {loading ? (
          <ActivityIndicator
            style={styles.icon}
            color={Colors.primary.black}
            size={"small"}
          />
        ) : (
          <MaterialIcons
            name={"close"}
            size={24}
            color={Colors.primary.black}
            style={styles.icon}
            onPress={() => setIsVisible(true)}
          />
        )}

        <View style={styles.button}>
          <View style={styles.rowView}>
            {/* <PaymentMethodIcon fill={'#000000'} /> */}
            <Text style={styles.btnText}>xxxx-{item.last4}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.btnTextyear}>
              {item.expMonth + "/" + item.expYear}
            </Text>
            {/* <View style={styles.radioView}>
                <RadioButton
                  value="first"
                  status={isChecked ? 'checked' : 'unchecked'}
                  onPress={onRadioButtonPress}
                />
              </View> */}
          </View>
        </View>
      </View>
      <DeleteCardModal
          isVisible={isVisible}
          onSubmit={() => {
            setIsVisible(false)
            handleClosePressed()
          }}
          onClose={() => setIsVisible(false)}
        />
    </View>
  );
};

export default CardComponent;
