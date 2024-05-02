import React, { useEffect, useRef } from "react";
import { ImageBackground, View ,Text,FlatList, ScrollView} from "react-native";
import SearchBar from "../../components/search-components/search-components";
import StoryTitle from "../../components/story/story-title/story-title";
import StoryText from "../../components/story/story-text/story-text";
import CommonHeader from "../../components/common-header/common-header";
import { SafeAreaView } from "react-native-safe-area-context";
import BeginnerSheet from "../../components/bottom-sheet-modal/bottom-sheet-modal";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { fetchStories } from "../../utils/api-helper";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { styles } from "./prevStory.styles";

  const StoryMain = () => {
    const previousStoryData = useSelector((state: RootState) => state.prevStory.value);
    const index = useSelector((state: RootState) => state.storyIndex.value);
    const storyData = useSelector((state: RootState) => state.story.value);
    // const nextStoryData = useSelector((state: RootState) => state.nextStory.value);
   const tagData =  previousStoryData?.previousStory?.storyTags || storyData[index]?.storyTags
   const renderDetailItem = ({ item, index }) => (
    <View style={styles.detail}>
      <View style={[styles.category, { backgroundColor: index % 2 === 0 ? "#2375F9" : "#C623F9" }]}>
        <Text style={styles.readText}>{item}</Text>
      </View>
    </View>
  );
const background = require("../../assets/images/background.png");

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <ImageBackground source={background} style={styles.container}>
          <CommonHeader />
          <SearchBar />
          <View>
      <View>
      <Text style={styles.number}>{previousStoryData?.previousStory?.storyId || storyData[index]?.storyId}</Text>
        <View>
          <Text style={styles.title}>{previousStoryData?.previousStory?.storyName || storyData[index]?.storyName}</Text>
        </View>
        <FlatList
          data={tagData}
          renderItem={renderDetailItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
    </View>
    <ScrollView>
        <Text style={styles.storyText}>
          {previousStoryData?.previousStory?.content || storyData[index]?.content}
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default StoryMain;
