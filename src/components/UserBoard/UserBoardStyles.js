import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const UserBoardStyles = StyleSheet.create({
  mainContainer: {
    height: height + 50,
    backgroundColor: "#ff7110",
    paddingBottom: 50,
    paddingTop: 40,
    zIndex: 100,
    elevation: 100,
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
    paddingHorizontal: 10,
    alignSelf: "center",
    textAlign: "center",
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    top: "60%",
    width: width,
    height: "40%",
    position: "absolute",
  },
  progressBar: {
    alignSelf: "center",
    marginTop: 50,
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
