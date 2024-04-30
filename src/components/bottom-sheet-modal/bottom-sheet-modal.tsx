import React, { useCallback, useRef, useState } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { View, Text, Image } from "react-native";
import Swiper from 'react-native-swiper'
import { sheetStyles } from "./bottom-sheet-styles";

interface BeginnerSheetProps {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
}

const BeginnerSheet: React.FC<BeginnerSheetProps> = ({ bottomSheetRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageData = [
    { source: require("../../assets/images/modalImage.png") },
    { source: require("../../assets/images/modalImage.png") },
    { source: require("../../assets/images/modalImage.png") },
    { source: require("../../assets/images/modalImage.png") },
  ];

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        ref={bottomSheetRef}
        snapPoints={["48%"]}
        enablePanDownToClose={true}
        handleIndicatorStyle={sheetStyles.indicatorStyle}
        handleStyle={sheetStyles.bottomSheetStyle}
        style={{ borderCurve: 'circular' }}

      >
        <Swiper
          showsButtons={false}
          loop={false}
          showsPagination={false}
          onIndexChanged={(index) => setCurrentIndex(index)}
        >
          {imageData.map((image, index) => (
            <View key={index} style={sheetStyles.slide}>

              <Image source={image.source} style={sheetStyles.image} />
              <View style={sheetStyles.imageView}>
                <Text style={sheetStyles.text}>{`${index + 1}/${imageData.length
                  }`}</Text>

              </View>
            </View>
          ))}
        </Swiper>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BeginnerSheet;


