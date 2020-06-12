import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import { ChapterButtonNegativeStyles as styles } from "./ChapterButtonNegativeStyles";

const ChapterButtonNegative = props => {
  return (
    <View style={styles.buttonLayout} data-test="buttonContainer">
      <View style={styles.indicator}>
        <LottieView
          source={require("../../../assets/animations/locked2.json")}
          autoPlay
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

export default ChapterButtonNegative;
