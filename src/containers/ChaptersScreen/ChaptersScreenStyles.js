import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ChaptersScreenStyles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "white"
  },
  indicator: {
    margin: 100
  }
});
