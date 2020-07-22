import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ProfileFormStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "rgba(	255, 123, 0, 0)",
    flex: 1,
  },
  formContainer: {
    width: width - 60,
    marginHorizontal: 30,
    marginTop: 20,
    opacity: 1,
    borderRadius: 20,
    backgroundColor: "rgba(242, 241, 239, 1)",
  },
  animation: {
    width: 80,
    height: 80,
    position: "absolute",
    padding: 5,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginLeft: 85,
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    fontFamily: "MontSerrat",
  },
  icon: {
    fontSize: 40,
    opacity: 0.6,
    alignSelf: "center",
    marginRight: 10,
  },
  textInputContainer: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
  textInputLabel: {
    fontSize: 15,
    marginBottom: 2,
    fontFamily: "MontSerrat",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: "MontSerrat",
  },
  submitButton: {
    backgroundColor: "#ff7110",
    width: width - 100,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
    fontFamily: "MontSerrat",
  },
});
