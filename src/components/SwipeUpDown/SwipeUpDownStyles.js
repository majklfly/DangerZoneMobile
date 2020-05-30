import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SwipeUpDownStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ff7110",
    position: "absolute",
    bottom: -20
  },
  mini: {
    height: 100,
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    maxHeight: 2
  },
  icon: {
    width: 100
  }
});
