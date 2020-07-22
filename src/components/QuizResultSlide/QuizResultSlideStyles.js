import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const QuizResultSlideStyles = StyleSheet.create({
  // POSITIVE
  containerPositive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 10,
    position: "absolute",
    top: 150,
    fontFamily: "MontSerrat",
    textAlign: "center",
  },
  animationPositive: {
    width: 300,
    height: 300,
  },

  // NEGATIVE
  containerNegative: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animationNegative: {
    width: 300,
    height: 300,
  },
  footer: {
    fontSize: 20,
    fontFamily: "MontSerrat",
    textAlign: "center",
  },
});
