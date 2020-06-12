import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import LottieView from "lottie-react-native";

import { navigate } from "../../navigationRef";
import { AsyncStorage } from "react-native";

import { ChapterButtonStyles as styles } from "./ChapterButtonPositiveStyles";

const ChapterButtonPositive = props => {
  const handleButton = async title => {
    const indexStringified = JSON.stringify(props.chapterIndex);
    await AsyncStorage.setItem("currentChapterIndex", indexStringified);
    navigate("Article");
  };

  return (
    <TouchableOpacity
      style={styles.buttonLayout}
      data-test="chapterButtonPositive"
    >
      <View style={styles.indicator}>
        <LottieView
          source={require("../../../assets/animations/locked.json")}
          autoPlay
          loop
        />
      </View>
      <Button
        title={props.title}
        titleStyle={styles.title}
        buttonStyle={styles.buttonStyle}
        onPress={() => handleButton(props.title)}
      ></Button>
    </TouchableOpacity>
  );
};

export default ChapterButtonPositive;
