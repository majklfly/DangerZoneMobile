import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ProfileStyles = StyleSheet.create({
  title: {
    fontSize: 48,
    textAlign: "center",
  },
  icon: {
    fontSize: 40,
    alignSelf: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 40,
  },
  facebookIcon: {
    fontSize: 30,
    width: 50,
    height: 50,
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#4267B2",
    color: "white",
  },
  twitterIcon: {
    fontSize: 30,
    borderWidth: 2,
    borderColor: "#AAB8C2",
    width: 50,
    height: 50,
    textAlign: "center",
    padding: 10,
    borderRadius: 50,
    color: "#1DA1F2",
  },
  redditIcon: {
    fontSize: 30,
    borderWidth: 2,
    width: 50,
    height: 50,
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  container: {
    width: width - 60,
    margin: 30,
    marginTop: 50,
    borderColor: "#ff7110",
    borderWidth: 3,
    height: height - 60,
    borderRadius: 20,
  },
  textContainer: {
    padding: 10,
  },
  textlineContainer: {
    paddingTop: 2,
  },
  textline: {
    fontSize: 26,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff8b",
  },
});
