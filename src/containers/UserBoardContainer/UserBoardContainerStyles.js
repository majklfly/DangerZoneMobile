import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const UserBoardContainerStyles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "red",
    width: width,
    height: height + 40,
    borderColor: "black",
    borderWidth: 5
  }
});
