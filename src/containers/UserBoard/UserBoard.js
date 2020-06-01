import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

import { navigate } from "../../navigationRef";
import { UserBoardStyles as styles } from "./UserBoardStyles";

import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

const UserBoard = props => {
  const [percentage, setPercentage] = useState(0);

  const handlePercentage = async () => {
    const data = await AsyncStorage.getItem("chaptersLength");
    const total = parseInt(data) * 100;
    const completed = props.userData.userdata.chapterdata.length * 0.01;
    const result = total * completed;
    setPercentage(result);
  };

  useEffect(() => {
    handlePercentage();
  }, []);

  return (
    <View style={styles.mainContainer} data-test="mainContainer">
      <Text style={styles.title} data-test="userBoardText">
        What's up, {props.userData.userdata.firstName}
      </Text>
      <AnimatedCircularProgress
        size={180}
        width={15}
        fill={percentage}
        tintColor="#364d79"
        onAnimationComplete={() => {}}
        backgroundColor="white"
        style={styles.progressBar}
        data-test="progressBar"
      >
        {fill => <Text style={styles.points}>{percentage}%</Text>}
      </AnimatedCircularProgress>
      <View style={styles.buttonsContainer} data-test="buttonContainer">
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Chapters")}
        >
          <AntDesign name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Quiz")}
        >
          <AntDesign name="question" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Profile")}
        >
          <AntDesign name="user" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.logout()}>
          <AntDesign name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.userDataReducer,
    chapters: state.ChapterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBoard);
