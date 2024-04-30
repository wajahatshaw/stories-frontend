import React from "react";
import { Text, View,FlatList } from "react-native";
import { styles } from "./story-title-styles";
import {useSelector} from 'react-redux';
import { RootState } from "../../../redux/store";
const StoryTitle = () => {
  const index = useSelector((state: RootState) => state.storyIndex.value);
  const storyData = useSelector((state: RootState) => state.story.value);
  const nextStoryData = useSelector((state: RootState) => state.nextStory.value);
 const tagData =  nextStoryData?.nextStory?.storyTags || storyData[index]?.storyTags
 const renderDetailItem = ({ item, index }) => (
  <View style={styles.detail}>
    <View style={[styles.category, { backgroundColor: index % 2 === 0 ? "#2375F9" : "#C623F9" }]}>
      <Text style={styles.readText}>{item}</Text>
    </View>
  </View>
);
  return (
    <View>
      <View>
      <Text style={styles.number}>{nextStoryData?.nextStory?.storyId || storyData[index]?.storyId}</Text>
        <View>
          <Text style={styles.title}>{nextStoryData?.nextStory?.storyName || storyData[index]?.storyName}</Text>
        </View>
        <FlatList
          data={tagData}
          renderItem={renderDetailItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
    </View>
  );
};

export default StoryTitle;
