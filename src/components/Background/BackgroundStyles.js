import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const BackgroundStyles = StyleSheet.create({
  background: {
    width: width,
    height: height + 40,
    position: "absolute",
    zIndex: -10,
  },
});
