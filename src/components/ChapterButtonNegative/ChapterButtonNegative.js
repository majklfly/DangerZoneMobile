import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { ChapterButtonNegativeStyles as styles } from "./ChapterButtonNegativeStyles";

const ChapterButtonNegative = props => {
  return (
    <View style={styles.buttonLayout} data-test="buttonContainer">
      <View style={styles.indicator}></View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

export default ChapterButtonNegative;
