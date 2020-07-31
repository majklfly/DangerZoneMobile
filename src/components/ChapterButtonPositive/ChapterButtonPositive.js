import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { navigate } from "../../navigationRef";
import { AsyncStorage } from "react-native";

import { ChapterButtonStyles as styles } from "./ChapterButtonPositiveStyles";

const ChapterButtonPositive = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleButton = async (title) => {
    const indexStringified = JSON.stringify(props.chapterIndex);
    await AsyncStorage.setItem("currentChapterIndex", indexStringified);
    navigate("Article");
  };

  return (
    <TouchableOpacity
      style={styles.buttonLayout}
      onPress={() => handleButton(props.title)}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      data-test="chapterButtonPositive"
    >
      <View style={isPressed ? styles.buttonPressed : styles.indicator}>
        {props.title === "Handwashing" && (
          <Image
            source={require("../../assets/images/handwashing.gif")}
            style={styles.animation}
          />
        )}
        {props.title === "Food Safety" && (
          <Image
            source={require("../../assets/images/food_safety.gif")}
            style={styles.animation}
          />
        )}
        {props.title === "Food Allergy" && (
          <Image
            source={require("../../assets/images/food_allergy.gif")}
            style={styles.animation}
          />
        )}
        {props.title === "Pest Control" && (
          <Image
            source={require("../../assets/images/pest_control.gif")}
            style={styles.animation}
          />
        )}
        {props.title === "Effective Cleaning" && (
          <Image
            source={require("../../assets/images/effective_cleaning.gif")}
            style={styles.animation}
          />
        )}
        {props.title === "Physical and Chemical  contamination" && (
          <Image
            source={require("../../assets/images/p_s_contamination.gif")}
            style={styles.animation}
          />
        )}
        {props.title === "Bacteria and Viruses in Food" && (
          <Image
            source={require("../../assets/images/b_s_food.gif")}
            style={styles.animation}
          />
        )}
        {props.title === "Separate" && (
          <Image
            source={require("../../assets/images/separate.gif")}
            style={styles.animation}
          />
        )}
      </View>
      <View style={isPressed ? styles.buttonPressed : styles.buttonStyle}>
        <Text style={isPressed ? styles.titlePressed : styles.title}>
          {" "}
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChapterButtonPositive;
