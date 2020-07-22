import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { translate } from "react-native-redash";

const { width, height } = Dimensions.get("window");

export const ChapterButtonStyles = StyleSheet.create({
  buttonLayout: {
    flexDirection: "row",
    margin: 5,
  },
  indicator: {
    height: 130,
    width: 100,
    left: 2,
    borderColor: "#FF7110",
    backgroundColor: "#fdbb77",
    borderWidth: 3,
    borderRightWidth: 0,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 11,
  },
  buttonStyle: {
    height: 130,
    width: width - 150,
    borderWidth: 3,
    borderLeftWidth: 0,
    borderColor: "#FF7110",
    backgroundColor: "#fdbb77",
    elevation: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "blue",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  animation: {
    width: "100%",
    height: "70%",
    borderRadius: 50,
    left: "15%",
    top: "15%",
    zIndex: 10,
    position: "absolute",
  },
});
