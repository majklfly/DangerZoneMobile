import React, { useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { ChaptersListStyles as styles } from "./ChaptersListStyles";

import ChapterButtonPositive from "../ChapterButtonPositive/ChapterButtonPositive";
import ChapterButtonNegative from "../ChapterButtonNegative/ChapterButtonNegative";

const ChaptersList = props => {
  const chapters = [];
  const completedChapters = [];

  const sortChapters = () => {
    if (
      props.chapters.chapters !== undefined &&
      props.completedChapters.userdata !== undefined
    ) {
      props.chapters.chapters.map(item => {
        return chapters.push([item.id, item.title]);
      });
      const data = props.completedChapters.userdata.chapterdata;
      data.map(item => {
        return item.completed === true
          ? completedChapters.push(item.chapterTitle)
          : null;
      });
    }
  };
  sortChapters();

  return (
    <View style={styles.container}>
      <FlatList
        data={chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          if (completedChapters.includes(item[1])) {
            return (
              <ChapterButtonNegative
                title={item[1]}
                buttonStyle={styles.inactiveButton}
                disabled={true}
              />
            );
          } else {
            return (
              <ChapterButtonPositive
                chapterIndex={item[0]}
                title={item[1]}
                buttonStyle={styles.activeButton}
              />
            );
          }
        }}
      />
    </View>
  );
};

export default ChaptersList;
