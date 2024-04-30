import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import CommonHeader from "../../components/common-header/common-header";
import SearchBar from "../../components/search-components/search-components";
import { StorySearchStyles } from "./story-search-styles";
import BookList from "../../components/book-list-components/book-list";
import { BookListProps } from "../../core/types";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const bookData: BookListProps[] = [
  {
    name: "Magic, Blood, and Fire",
    writtenBy: "Written on Saturday, October the 21st, 2023 by Sam Harris",
    publishedOn: "Published on November the 5th, 2023",
  },
  {
    name: "Magic Carpet to the Moon",
    writtenBy: "Written on Saturday, October the 21st, 2023 by Sam Harris",
    publishedOn: "Published on January the 1st, 2024",
  },
  {
    name: "Magic Moments with a Magic Lady",
    writtenBy: "Written on Saturday, September the 16th, 2023 by Sam Harris",
    publishedOn: "Published on January the 8th, 2024",
  },
];

const StorySearch = () => {
  const renderItem = ({ item }: { item: any }) => (
    <BookList 
      item={{
        name: item.storyName,
        writtenBy: `Written by ${item.author}`,
        publishedOn: item.storyId, 
      }}
    />
  );
  const searchData = useSelector((state: RootState) => state.search.value);
  console.log(searchData)

  return (
    <SafeAreaView style={StorySearchStyles.mainContainer}>
      <SearchBar showBackButton={true} />
      <FlatList
        data={searchData}
        renderItem={renderItem}
        keyExtractor={(item) => item.storyId}
      />
    </SafeAreaView>
  );
};

export default StorySearch;
