import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const UserBoardStyles = StyleSheet.create({
  mainContainer: {
    height: height + 50,
    backgroundColor: "#ff7110",
    justifyContent: "space-between",
    paddingBottom: 50,
    paddingTop: 40,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "#364d79",
    borderWidth: 5,
  },
  title: {
    fontSize: 40,
    paddingTop: 20,
    alignSelf: "center",
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  progressBar: {
    alignSelf: "center",
    marginBottom: 200,
  },
  points: {
    fontSize: 40,
  },
  icon: {
    color: "white",
    alignSelf: "center",
    marginTop: -30,
  },
});
