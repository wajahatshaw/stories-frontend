import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import CommonHeader from "../../components/common-header/common-header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/search-components/search-components";
import { SavedStoriesScreenStyles } from "./saved-stories-styles";
import { useNavigation } from "@react-navigation/native";
import { fetchSavedStories } from "../../utils/api-helper";

interface stories {
  id: string;
  title: string;
  date: string;
  image: any;
}

const SavedStoriesScreen: React.FC = () => {
  const navigation = useNavigation();
  const prevButton = require("../../assets/icons/prevBtn.png");
  const nextButton = require("../../assets/icons/nextbtn.png");
  const [savedStories, setSavedStories] = useState<stories[]>([]); 

  useEffect(() => {
    async function fetchData() {
      try {
        const savedStories = await fetchSavedStories();
        console.log("Saved stories:", savedStories.savedStories);
        setSavedStories(savedStories.savedStories)
      } catch (error) {
        console.error("Error fetching saved stories:", error);
      }
    }
    fetchData();
  }, []);

 
  const renderItem = ({ item }: { item: stories }) => {
    return (
      <View style={SavedStoriesScreenStyles.listContainer}>
        <Text style={SavedStoriesScreenStyles.listTitle}>{item.storyName}</Text>
        <Text style={SavedStoriesScreenStyles.listDate}>{item.storyId}</Text>
        <Image source={nextButton} style={SavedStoriesScreenStyles.listIcon} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <>
        <View>
          <CommonHeader />
        </View>
        <SearchBar />
      </>

      <View style={SavedStoriesScreenStyles.topView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={SavedStoriesScreenStyles.backView}>
            <Image
              source={prevButton}
              style={SavedStoriesScreenStyles.backicon}
            />
            <Text style={SavedStoriesScreenStyles.backText}>{"Back"}</Text>
          </View>
        </TouchableOpacity>

        <Text style={SavedStoriesScreenStyles.text}>{"Saved Stories"}</Text>
      </View>

      <View style={SavedStoriesScreenStyles.searchContainer}>
        <TouchableOpacity style={SavedStoriesScreenStyles.searchButton}>
          <Text style={SavedStoriesScreenStyles.searchButtonText}>
            {"Search"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={savedStories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default SavedStoriesScreen;
