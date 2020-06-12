import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const QuizSlideStyles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 40,
    height: height,
    padding: 20,
    margin: 20,
    borderWidth: 3,
    borderColor: "#ff7110",
    justifyContent: "center"
  },
  question: {
    fontSize: 30,
    fontFamily: "PermanentMarker",
    padding: 20
  },
  button: {
    margin: 20,
    backgroundColor: "#364d79"
  }
});
