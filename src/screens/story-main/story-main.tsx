import React, { useEffect, useRef } from "react";
import { ImageBackground, View } from "react-native";
import SearchBar from "../../components/search-components/search-components";
import StoryTitle from "../../components/story/story-title/story-title";
import StoryText from "../../components/story/story-text/story-text";
import { StoryMainStyles } from "./story-main.styles";
import CommonHeader from "../../components/common-header/common-header";
import { SafeAreaView } from "react-native-safe-area-context";
import BeginnerSheet from "../../components/bottom-sheet-modal/bottom-sheet-modal";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { fetchStories } from "../../utils/api-helper";
  const StoryMain = () => {

    useEffect(() => {
      fetchStories()
        .then((data) => {
          console.log('Fetched stories:', JSON.stringify(data,null,2));
        })
        .catch((error) => {
          console.error('Error fetching stories:', error);
        });
    }, []);
    
    const route = useRoute();
    console.log("route", route);
    const isFocused = useIsFocused();

    const BeginnerSheetRef = useRef();
    const background = require("../../assets/images/background.png");
    useEffect(() => {
      if (isFocused && route.name === "Photos") {
          BeginnerSheetRef.current.present(0)
      }
  }, [isFocused]);
  return (
    <SafeAreaView style={StoryMainStyles.mainContainer}>
      <View style={StoryMainStyles.mainContainer}>
        <ImageBackground source={background} style={StoryMainStyles.container}>
          <CommonHeader />
          <SearchBar />
          <StoryTitle />
          <StoryText />
        </ImageBackground>
      </View>
      <BeginnerSheet
       bottomSheetRef={BeginnerSheetRef}
/>
    </SafeAreaView>
  );
};

export default StoryMain;
