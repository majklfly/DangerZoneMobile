import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { navigate } from "../../navigationRef";

import { ArticlesScreenStyles as styles } from "./ArticlesScreenStyles";
import ArticleSlider from "../../components/ArticleSlider/ArticleSlider";
import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";

import { getChapter } from "../../store/actions/chapters";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";

const ArticleScreen = props => {
  const retrieveData = async () => {
    let currentChapterIndex;
    let token;
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      result.map((item, index) => {
        if (item[0] === "currentChapterIndex") {
          return (currentChapterIndex = item[1]);
        } else if (item[0] === "token") {
          return (token = item[1]);
        }
      });
      props.getChapter(token, currentChapterIndex);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <View style={styles.screen} data-test="articleContainer">
      <ArticleSlider data={props.chapter} data-test="articleSlider" />
      <UserBoardContainer data-test="swipeContainer" />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    chapter: state.ChapterReducer.chapter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChapter: (token, index) => {
      dispatch(getChapter(token, index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen);
