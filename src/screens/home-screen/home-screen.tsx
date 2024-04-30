import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  BackHandler,
  Modal,
  TouchableOpacity,
} from "react-native";
import CommonHeader from "../../components/common-header/common-header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/search-components/search-components";
// import BackButton from "../assets/icons/BackButton";
import { HomeScreenStyles } from "./home-screen.styles";
import SpeakerIcon from "react-native-vector-icons/Ionicons";
import CommonButton from "../../components/common-button/common-button";
import CommonPlayBtn from "../../components/common-play-btn/common-play-btn";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchNextStory, fetchStories, guestMode, saveStory } from "../../utils/api-helper";
import { setStory } from "../../redux/storySlice";
import { useDispatch , useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import { useTimer } from 'react-timer-hook';

const homeBg = require("../../assets/images/homeBg.png");
interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [guestUser, setGuestUser] = useState(false);
  const dispatch = useDispatch();
  const nextStoryData = useSelector((state: RootState) => state.nextStory.value);
  const currentStoryId = useSelector((state: RootState) => state.storyId.value);
  const storyData = useSelector((state: RootState) => state.story.value);
  const index = useSelector((state: RootState) => state.storyIndex.value);
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: new Date(2024, 4, 16) });


  const handleReadStory = () => {
    navigation.navigate("bottomNavigator");
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleVisitSavedStories = ()=>{
    navigation.navigate('SavedStoriesScreen');
    toggleModal(); 
  }

const stories = async ()=> {
  fetchStories()
  .then((data) => {
    dispatch(setStory(data))
  })
  .catch((error) => {
    console.error('Error fetching stories:', error);

  });
}

  useEffect(() => {
    const ActivateGuestMode = async () => {
      try {
        const userLoggedIn = await AsyncStorage.getItem("userLoggedIn");
        if (userLoggedIn === "true") {
          stories();
          console.log("User is already logged in. Guest mode not activated.");
          return;
        }
        const isGuestMode = await AsyncStorage.getItem("isGuestMode");
        if (isGuestMode !== 'true') {
          const response = await guestMode();
          console.log("Guest Mode Activated:", response);
          await AsyncStorage.setItem('jwtToken', response.token);
          await AsyncStorage.setItem('isGuestMode', 'true');
          stories();
          setGuestUser(true);
        } else {
          console.log("Guest Mode is already activated");
          stories();
          setGuestUser(true); 
        }
      } catch (error) {
        console.error("Error Activating Guest mode:", error);
      }
    };
    ActivateGuestMode();
  }, []);

  // useEffect(() => {
  //   const clearAsyncStorage = async () => {
  //     try {
  //       await AsyncStorage.clear();
  //       console.log('AsyncStorage cleared successfully.');
  //     } catch (error) {
  //       console.error('Error clearing AsyncStorage:', error);
  //     }
  //   };
  //   clearAsyncStorage();
  // }, []);

  const fetchNext = async (currentStoryId: string) => {
    try {
      const nextStoryData = await fetchNextStory(currentStoryId);
      return nextStoryData;
    } catch (error) {
      console.error('Error fetching next story:', error);  
      throw error;
    }
  };

const SaveStory = async ()=> {
try {
  const nextStoryData = await fetchNextStory(currentStoryId);
  const storyId = nextStoryData?.storyId
  await saveStory(storyId)
} catch (error) {
  console.error("Error saving story:", error);
}};

const handleSaveNextStory = async () => {
  try {
    await SaveStory(); 
    toggleModal(); 
  } catch (error) {
    console.error("Error saving story:", error);
  }
};
  
  return (
    <SafeAreaView style={HomeScreenStyles.root}>
      <View style={HomeScreenStyles.HeaderContainer}>
        <View>
          <CommonHeader />
        </View>
        <SearchBar />
      </View>
      <ImageBackground source={homeBg} style={HomeScreenStyles.SecondContainer}>
        <View style={HomeScreenStyles.UpcomingStoriesV}>
          <View style={HomeScreenStyles.TimerView}>
            <Text style={HomeScreenStyles.UpcomingStoriesText}>{days}:{hours}:{minutes}:{seconds}</Text>
          </View>
          <Text style={HomeScreenStyles.UpcomingStoriesText}>
            Unitl next story drop
          </Text>
          <SpeakerIcon
            style={HomeScreenStyles.UpcomingStoriesIcon}
            name="volume-medium-outline"
            size={30}
            color="#5C23F9"
           
          />
        </View>

        <View style={HomeScreenStyles.StoriesContainer}>
          <View style={HomeScreenStyles.StoryDetailV}>
            <Text style={HomeScreenStyles.NewStoryMsg}>
              A new Story is ready for you...
            </Text>
            <Text style={HomeScreenStyles.StoryName}>{nextStoryData?.nextStory?.storyName || storyData[index]?.storyName}</Text>
            <Text style={HomeScreenStyles.StoryPublishT}>
              Written on Saturday, October the 7th,2023 by {nextStoryData?.nextStory?.author || storyData[index]?.author}
            </Text>
            <Text style={HomeScreenStyles.StoryPublishT}>
              Published on November the 12th, 2023
            </Text>
          </View>

          <View style={HomeScreenStyles.ReadBtn}>
            <CommonButton
              btnText="Read the New Story"
              customStyles={HomeScreenStyles.newStoryBtn}
              onPress={handleReadStory}
            />
            <CommonButton
              btnText="Save next story in pack"
              customStyles={HomeScreenStyles.saveText}
              onPress={handleSaveNextStory}
            />
          </View>
          <View style={HomeScreenStyles.playButtonView}>
            <CommonPlayBtn
              btnText1="Read last week`s"
              btnText2="Quest to the..."
              disableRightBtn
            />
            <CommonPlayBtn
              btnText1="Read last week`s"
              btnText2="Quest to the..."
              disableLeftBtn
            />
          </View>
        </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={HomeScreenStyles.centeredView}>
          <View style={HomeScreenStyles.modalView}>
            <Text style={HomeScreenStyles.modalText}>Added to your saved stories</Text>
            <CommonButton
            btnText="Visit saved stories"
            customStyles={HomeScreenStyles.savedStoryButton} 
            onPress={handleVisitSavedStories}
            />
            <TouchableOpacity
              onPress={toggleModal}
            >
              <Text style={HomeScreenStyles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
   
   
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
