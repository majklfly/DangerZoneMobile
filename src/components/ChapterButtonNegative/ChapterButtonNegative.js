import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LottieView from "lottie-react-native";

import { ChapterButtonNegativeStyles as styles } from "./ChapterButtonNegativeStyles";

const ChapterButtonNegative = (props) => {
  return (
    <View style={styles.buttonLayout} data-test="buttonContainer">
      <View style={styles.coverLayer} />
      <View style={styles.indicator}>
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
      <View style={styles.textContainer}>
        <Image
          source={require("../../assets/images/checked.png")}
          style={styles.checked}
        />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

export default ChapterButtonNegative;
