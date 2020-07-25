import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Linking,
} from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";
import { AntDesign, Feather as Icon } from "@expo/vector-icons";

import { navigate } from "../../navigationRef";
import { UserBoardStyles as styles } from "./UserBoardStyles";

import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

const UserBoard = (props) => {
  const [percentage, setPercentage] = useState(0);

  const separateCompletedChapters = () => {
    const completedChapters = [];
    if (props.userData.userdata) {
      props.userData.userdata.chapterdata.map((chapter) => {
        chapter.completed === true ? completedChapters.push(chapter) : null;
      });
    }
    return completedChapters;
  };

  const handlePercentage = async () => {
    const completed = separateCompletedChapters();
    const data = await AsyncStorage.getItem("chaptersLength");
    const percent = parseInt(data) / 100;
    const result = completed.length / percent;
    setPercentage(result);
  };

  useEffect(() => {
    handlePercentage();
  }, []);

  return (
    <View style={styles.mainContainer} data-test="mainContainer">
      <AntDesign
        name="up"
        size={24}
        color="white"
        style={{
          color: "white",
          alignSelf: "center",
          opacity: 0.4,
          position: "absolute",
          top: "2%",
        }}
      />
      {props.userData.userdata ? (
        <Text style={styles.title} data-test="userBoardText">
          What's up, {props.userData.userdata.username}
        </Text>
      ) : null}
      <AnimatedCircularProgress
        size={180}
        width={15}
        fill={percentage}
        tintColor="#364d79"
        backgroundColor="white"
        style={styles.progressBar}
        data-test="progressBar"
      >
        {(fill) => <Text style={styles.points}>{percentage}%</Text>}
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
          onPress={() => navigate("Profile")}
        >
          <AntDesign name="user" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("About")}
        >
          <AntDesign name="team" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Setting")}
        >
          <AntDesign name="setting" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("mailto:majklfly@gmail.com")}
        >
          <AntDesign name="mail" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.logout()}>
          <AntDesign name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userDataReducer,
    chapters: state.ChapterReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBoard);
