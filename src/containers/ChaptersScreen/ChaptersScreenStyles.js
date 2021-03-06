import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ChaptersScreenStyles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 50,
  },
  indicator: {
    margin: 100,
  },
  loadingText: {
    width: "80%",
    color: "white",
    fontFamily: "MontSerrat",
    marginTop: "80%",
    fontSize: 20,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
