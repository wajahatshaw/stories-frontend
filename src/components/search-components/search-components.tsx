import React, { useCallback, useState } from "react";
import { TextInput, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SearchBarStyles } from "./search-components.styles";
import Colors from "../../constants/color";
import { styles } from "../story/story-title/story-title-styles";
import { searchStories } from "../../utils/api-helper";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/search";
const image = require("../../assets/icons/search.png");
interface SearchBarProps {
  showBackButton?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ showBackButton = false }) => {
  const navigation = useNavigation();
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();

  const handleOnPress = () => {
    navigation.navigate("StorySearch");
  };

  const handleOnPressBack = () => {
    navigation.goBack();
  };
  
  const Search = useCallback(
    async (searchQuery: string) => {
      try {
        const results = await searchStories(searchQuery);
        dispatch(setSearch(results));
      } catch (error) {
        console.error("Error searching for stories:", error);
      }
    },
    [searchStories]
  );

  const handleInputChange = (text: string) => {
    setQuery(text);
    Search(text); 
  };
  
  return (
    <View style={SearchBarStyles.mainContainer}>
      {showBackButton && (
        <View style={SearchBarStyles.backContainer}>
          <TouchableOpacity
            onPress={handleOnPressBack}
            style={SearchBarStyles.backButton}
          >
            <MaterialCommunityIcons
              name="chevron-left-circle-outline"
              size={40}
              color={Colors.primary.main}
            />
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        onPress={handleOnPress}
        style={SearchBarStyles.searchContainer}
      >
        <View style={SearchBarStyles.searchBar}>
          <View style={SearchBarStyles.inputContainer}>
            <TextInput
              placeholder="Search"
              style={SearchBarStyles.textInput}
              placeholderTextColor={Colors.primary.main}
              value={query}
              onChangeText={handleInputChange}
            />
            <Image source={image} style={SearchBarStyles.image} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;