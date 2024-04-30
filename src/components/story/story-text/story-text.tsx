import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { styles } from "./story-text-styles";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../redux/store";
import { setStoryIndex } from "../../../redux/storyIndexSlice";
import { fetchNextStory } from "../../../utils/api-helper";
import { setNextStory } from "../../../redux/nextStorySlice";
import { setStoryId } from "../../../redux/storyIdSlice";
const nextBtn = require("../../../assets/icons/nextbtn.png");

const StoryText = () => {
  const dispatch = useDispatch();
  const index = useSelector((state: RootState) => state.storyIndex.value);
  const storyData = useSelector((state: RootState) => state.story.value);
  const nextStoryData = useSelector((state: RootState) => state.nextStory.value);
  
  const fetchNext = async (currentStoryId: string) => {
    setLoading(true);
    try {
      const nextStoryData = await fetchNextStory(currentStoryId);
      console.log(">><<>>><<>><<",currentStoryId)
      setLoading(false);
      return nextStoryData;
    } catch (error) {
      console.error('Error fetching next story:', error);
      setLoading(false);
      throw error;
    }
  };
  const [loading, setLoading] = useState(false);
  const [currentStoryId, setCurrentStoryId] = useState(storyData[0]?.storyId); 
  console.log(">>>>>>>>>>",currentStoryId)
  dispatch(setStoryId(currentStoryId));

  const nextStory = async () => {
       setLoading(true);
    try {
      
      const nextStoryData = await fetchNext(currentStoryId);
      console.log("?????????",nextStoryData)
      if (nextStoryData) {
        dispatch(setNextStory(nextStoryData));
        setCurrentStoryId(nextStoryData.storyId); 
      } else {
        console.log("No more stories in pack");
      }
    } catch (error) {
      console.error('Error fetching next story:', error);
    }
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.storyText}>
          {nextStoryData?.nextStory?.content || storyData[index]?.content}
        </Text>
        <TouchableOpacity style={styles.nextBtn} onPress={nextStory}>
          {loading ? ( 
            <ActivityIndicator color="#ffffff" style={{ paddingLeft:'45%' }} /> 
          ) : (
            <>
              <Text style={styles.btnText}>Next Story</Text>
              <Image source={nextBtn} style={styles.icon} />
            </>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StoryText;
