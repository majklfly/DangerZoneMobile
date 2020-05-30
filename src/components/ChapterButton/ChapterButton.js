import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { navigate } from "../../navigationRef";
import { AsyncStorage } from "react-native";

import { ChapterButtonStyles as styles } from "./ChapterButtonStyles";

const ChapterButton = props => {
  const handleButton = async title => {
    const indexStringified = JSON.stringify(props.chapterIndex);
    await AsyncStorage.setItem("currentChapterIndex", indexStringified);
    navigate("Article");
  };

  return (
    <Button
      title={props.title}
      buttonStyle={props.buttonStyle}
      onPress={() => handleButton(props.title)}
      disabled={props.disabled}
    ></Button>
  );
};

export default ChapterButton;
