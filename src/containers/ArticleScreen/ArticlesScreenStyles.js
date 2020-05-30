import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ArticlesScreenStyles = StyleSheet.create({
  screen: {
    backgroundColor: "#ff7110",
    height: height
  }
});
