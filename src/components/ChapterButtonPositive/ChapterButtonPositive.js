import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-elements";
import LottieView from "lottie-react-native";

import { navigate } from "../../navigationRef";
import { AsyncStorage } from "react-native";

import { ChapterButtonStyles as styles } from "./ChapterButtonPositiveStyles";

const ChapterButtonPositive = (props) => {
  const handleButton = async (title) => {
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
        <Image
          source={require("../../assets/images/handwashing.gif")}
          style={styles.animation}
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
