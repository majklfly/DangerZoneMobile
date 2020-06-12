import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";

const ProfileScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <LottieView
        source={require("../../../assets/animations/7314-loading.json")}
        autoPlay
        loop
      />
      <UserBoardContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: 400,
    height: 400,
    backgroundColor: "blue"
  }
});

export default ProfileScreen;
