import React, { useEffect } from "react";
import { View, Text, AsyncStorage, BackHandler } from "react-native";

import ChaptersList from "../../components/ChaptersList/ChaptersList";
import { ChaptersScreenStyles as styles } from "./ChaptersScreenStyles";
import LottieView from "lottie-react-native";

import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";

import { getChapters } from "../../store/actions/chapters";
import { getUserData } from "../../store/actions/userData";
import { connect } from "react-redux";

const ChaptersScreen = (props) => {
  const loadData = async () => {
    await props.getChapters(props.token);
    await props.getUserData(props.token, props.userId);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const backButtonHandler = () => {
      return false;
    };
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

    return () => {
      BackHandler.removeEventListener();
    };
  }, []);

  if (props.chapters.chapters) {
    AsyncStorage.setItem(
      "chaptersLength",
      JSON.stringify(props.chapters.chapters.length)
    );
    return (
      <View style={styles.container} data-test="chapterContainer">
        <ChaptersList
          chapters={props.chapters}
          completedChapters={props.userData}
          data-test="chapterList"
        />
        <UserBoardContainer data-test="swipeContainer" />
      </View>
    );
  }
  return (
    <View style={styles.loadingContainer}>
      <LottieView
        source={require("../../../assets/animations/7314-loading.json")}
        autoPlay
        loop
      />
      <Text style={styles.loadingText}>
        Please wait, this might take couple seconds.
      </Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.AuthReducer.token,
    userId: state.AuthReducer.userId,
    chapters: state.ChapterReducer,
    userData: state.userDataReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChapters: (token) => {
      dispatch(getChapters(token));
    },
    getUserData: (token, userId) => {
      dispatch(getUserData(token, userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChaptersScreen);
