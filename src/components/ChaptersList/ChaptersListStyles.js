import React from "react";
import { StyleSheet } from "react-native";

export const ChaptersListStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fdbb77",
    borderRadius: 5
  },
  title: {
    fontSize: 30
  },
  activeButton: {
    margin: 10,
    borderRadius: 10
  },
  inactiveButton: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "red"
  }
});
