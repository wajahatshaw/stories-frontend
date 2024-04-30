import React from "react";
import { View, Text } from "react-native";
import { StorySearchStyles } from "../../screens/story-search-screen/story-search-styles"; // Adjust the path as necessary
import { BookListProps } from "../../core/types";
const BookList = ({ item }: { item: BookListProps }) => {
  return (
    <View style={StorySearchStyles.bookContainer}>
      <View style={StorySearchStyles.bookCircle}>
        <Text style={StorySearchStyles.bookTitle}>{item.name}</Text>
        <Text style={StorySearchStyles.bookWritten}>{item.writtenBy}</Text>
        <Text>{item.publishedOn}</Text>
      </View>
    </View>
  );
};
export default BookList;
