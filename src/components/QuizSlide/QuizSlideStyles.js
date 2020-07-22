import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const QuizSlideStyles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 40,
    height: height - 100,
    padding: 20,
    margin: 20,
    borderWidth: 3,
    borderColor: "#ff7110",
    justifyContent: "center",
    backgroundColor: "#364d79",
    elevation: 15,
  },
  question: {
    fontSize: 17,
    fontFamily: "MontSerrat",
    padding: 20,
    color: "white",
  },
  button: {
    margin: 20,
    backgroundColor: "#ff7110",
  },
});
