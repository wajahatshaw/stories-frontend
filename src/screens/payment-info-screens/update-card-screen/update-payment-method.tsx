import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../../../components/search-components/search-components";
import CommonHeader from "../../../components/common-header/common-header";
import { Styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  CardDetails,
  SQIPCardEntry,
} from "react-native-square-in-app-payments";
import CustomAlert from "../../../components/custom modal component/custom-modal";
import { createCustomerCard, getUserCard } from "../../../utils/api-helper";
import { FirebaseAuthError, ICard } from "../../../core/types";
import CardComponent from "../../../components/card-component/card-component";

const prevBtn = require("../../../assets/icons/prevBtn.png");

const UpdatePaymentMethod = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cardData, setCardData] = useState();
  const navigation = useNavigation();

  const handleBackIconPress = () => {
    navigation.goBack();
  };

  const onCardEntryComplete = () => {
    setShowAlert(true);
    getPaymentCard();
    console.log("alert");
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    getPaymentCard();
    console.log("OK Pressed");
  };
  
  const onCardNonceRequestSuccess = useCallback(
    async (cardDetails: CardDetails) => {
      try {
        const { card } = cardDetails;
        await createCustomerCard(
          cardDetails.nonce,
          card.prepaidType === "UNKNOWN"
            ? { ...card, prepaidType: "NOT_PREPAID" }
            : card,
        );
        await SQIPCardEntry.completeCardEntry(onCardEntryComplete);
      } catch (ex) {
        const error = ex as FirebaseAuthError;
        await SQIPCardEntry.showCardNonceProcessingError(error.message);
      }
    },
    []
  );

  const onCardEntryCancel = useCallback(() => {
    console.log("onCardEntryCancel");
  }, []);

  const handleAddCard = useCallback(async () => {
    console.log("Herererererfghjkl");

    try {
      const cardEntryConfig: SQIPCardEntry.CardEntryConfig = {
        collectPostalCode: false,
      };
      await SQIPCardEntry.startCardEntryFlow(
        cardEntryConfig,
        onCardNonceRequestSuccess,
        onCardEntryCancel
      );
    } catch (e) {
      console.error("Error occured!!! => ", e);
    }
  }, []);

  const getPaymentCard = useCallback(async () => {
    try {
      const response = await getUserCard();
      setCardData(response?.cards);
      console.log("Payment card are!", response);
    } catch (error) {
      console.error("Error while getting card:", error);
    }
  }, []);

  useEffect(() => {
    getPaymentCard();
  }, []);

  const renderCardItem = useCallback(
    ({ item, index }: { item: ICard; index: number }) => {
      return (
        <CardComponent
          item={item}
          // isChecked={selectedCardIndex === index}
          // onRadioButtonPress={() => handleRadioButtonPress(index)}
          getCardFirebase={getPaymentCard}
        />
      );
    },
    []
  );

  return (
    <SafeAreaView style={Styles.container}>
      <CommonHeader showSubscriptionButton={false} />
      <SearchBar />
      <View style={Styles.backButtonContainer}>
        <TouchableOpacity
          style={Styles.backTouchable}
          onPress={handleBackIconPress}
        >
          <Image source={prevBtn} style={Styles.backIcon} />
          <Text style={Styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={Styles.manageText}>Select payment method</Text>
      </View>

      <FlatList
        data={cardData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCardItem}
      />

      <TouchableOpacity style={Styles.optionsContainer} onPress={handleAddCard}>
        <Text style={Styles.optionText}>Update payment method</Text>
      </TouchableOpacity>
      <CustomAlert
        visible={showAlert}
        onPress={handleCloseAlert}
        text={"Your payment method has been successfully updated."}
      />
    </SafeAreaView>
  );
};

export default UpdatePaymentMethod;
