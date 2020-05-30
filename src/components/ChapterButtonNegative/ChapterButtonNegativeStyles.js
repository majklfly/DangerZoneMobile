import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ChapterButtonNegativeStyles = StyleSheet.create({
  buttonLayout: {
    flexDirection: "row",
    margin: 5
  },
  indicator: {
    height: 100,
    width: 40,
    backgroundColor: "#660000",
    borderWidth: 3,
    borderRightWidth: 0,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  textContainer: {
    height: 100,
    width: width - 90,
    borderWidth: 3,
    borderLeftWidth: 0,
    borderColor: "black",
    backgroundColor: "#364d79",
    justifyContent: "center"
  },
  title: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15
  }
});
