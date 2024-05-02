import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CommonPlayBtnStyles } from "./common-play-btn.styles";

const prevBtn = require("../../assets/icons/prevBtn.png");
const nextBtn = require("../../assets/icons/nextbtn.png");

interface CommonPlayBtnProps {
  btnText1?: string;
  btnText2?: string;
  disableLeftBtn?: Boolean;
  disableRightBtn?: Boolean;
  onPress?: () => {}; 
}

const CommonPlayBtn: React.FC<CommonPlayBtnProps> = (Props) => {
  return (
    <TouchableOpacity style={CommonPlayBtnStyles.buttonView}  onPress={Props.onPress} >
      {!Props.disableLeftBtn && (
        <Image source={prevBtn} style={CommonPlayBtnStyles.icons} />
      )}
      <View>
        <Text
          style={[CommonPlayBtnStyles.playBtnFirstText, Props.customStyles]}
        >
          {Props.btnText1}
        </Text>
        <Text style={CommonPlayBtnStyles.playBtnSecondText}>
          {Props.btnText2}
        </Text>
      </View>
      {!Props.disableRightBtn && (
        <Image source={nextBtn} style={CommonPlayBtnStyles.icons} />
      )}
    </TouchableOpacity>
  );
};

export default CommonPlayBtn;
