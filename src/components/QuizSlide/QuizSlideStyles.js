import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const QuizSlideStyles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width,
    height: height,
    padding: 20,
    justifyContent: "center"
  },
  question: {
    fontSize: 30,
    padding: 20
  },
  button: {
    margin: 20,
    backgroundColor: "#364d79"
  }
});
