import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ProfileFormStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "grey",
    backgroundColor: "rgba(103, 128, 159, 0.6)",
    flex: 0
  },
  formContainer: {
    width: width - 60,
    marginHorizontal: 30,
    marginTop: 20,
    height: height,
    opacity: 1,
    backgroundColor: "rgba(242, 241, 239, 1)"
  },
  animation: {
    width: 80,
    height: 80,
    position: "absolute",
    padding: 5
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginLeft: 85
  },
  title: {
    fontSize: 48,
    textAlign: "center"
  },
  icon: {
    fontSize: 40,
    opacity: 0.6,
    alignSelf: "center"
  },
  textInputContainer: {
    marginHorizontal: 15,
    marginVertical: 5
  },
  textInputLabel: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10
  },
  submitButton: {
    backgroundColor: "#ff7110",
    width: width - 100,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30
  }
});
