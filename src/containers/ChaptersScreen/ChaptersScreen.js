import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

import ChaptersList from "../../components/ChaptersList/ChaptersList";
import { ChaptersScreenStyles as styles } from "./ChaptersScreenStyles";

import { SwipeUpDownCustom } from "../../components/SwipeUpDown/SwipeUpDown";

import { getChapters } from "../../store/actions/chapters";
import { getUserData } from "../../store/actions/userData";
import { connect } from "react-redux";

const ChaptersScreen = props => {
  useEffect(() => {
    props.getChapters(props.token);
    props.getUserData(props.token, props.userId);
  }, []);

  if (typeof props.chapters.chapters === "object") {
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
        <SwipeUpDownCustom data-test="swipeContainer" />
      </View>
    );
  }
  return (
    <ActivityIndicator
      size="large"
      color="#0000ff"
      style={styles.indicator}
      data-test="chapterIndicator"
    />
  );
};

const mapStateToProps = state => {
  return {
    token: state.AuthReducer.token,
    userId: state.AuthReducer.userId,
    chapters: state.ChapterReducer,
    userData: state.userDataReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChapters: token => {
      dispatch(getChapters(token));
    },
    getUserData: (token, userId) => {
      dispatch(getUserData(token, userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChaptersScreen);
