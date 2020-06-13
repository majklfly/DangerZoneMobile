import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const QuizResultSlideStyles = StyleSheet.create({
  // POSITIVE
  containerPositive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 35,
    borderColor: "green",
    margin: 0
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 10,
    position: "absolute",
    top: 40,
    fontFamily: "PTSans",
    textAlign: "center"
  },
  animationPositive: {
    width: 300,
    height: 300
  },

  // NEGATIVE
  containerNegative: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FF4500",
    borderWidth: 35
  },
  animationNegative: {
    width: 300,
    height: 300
  },
  footer: {
    fontSize: 20,
    fontFamily: "PTSans"
  }
});
