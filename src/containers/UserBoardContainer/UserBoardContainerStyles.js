import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const UserBoardContainerStyles = StyleSheet.create({
  container: {
    position: "absolute",
    width: width,
    height: height + 10
  }
});
