import React from 'react';
import { View,Text, Image, TouchableOpacity } from 'react-native';
import { CommonButtonStyle } from './common-button.styles';

interface CommonButtonProps {
  btnText?: string;
  onPress?: ()=>{}
  // btnPaddingVertical?:number;
  // btnborderRadius?:number;
  // textFontSize?:number;
  // btnPaddingHorizental?:number;
  customStyles?:{}
}

const CommonButton: React.FC<CommonButtonProps> = (Props) => {
  return (
        <TouchableOpacity style={CommonButtonStyle.subsBtn} onPress={Props.onPress}>
          <Text style={[CommonButtonStyle.subsBtnText , Props.customStyles ]}>
           {Props.btnText}
          </Text>
        </TouchableOpacity>
  );
};

export default CommonButton;
