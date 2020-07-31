import React, { useEffect } from "react";
import { View, BackHandler } from "react-native";
import { navigate } from "../../navigationRef";

import { ArticlesScreenStyles as styles } from "./ArticlesScreenStyles";
import ArticleSlider from "../../components/ArticleSlider/ArticleSlider";
import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";

import { getChapter } from "../../store/actions/chapters";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";

const ArticleScreen = (props) => {
  const retrieveData = async () => {
    const token = await AsyncStorage.getItem("token");
    const currentChapterIndex = await AsyncStorage.getItem(
      "currentChapterIndex"
    );
    props.getChapter(token, currentChapterIndex);
  };

  useEffect(() => {
    const backButtonHandler = () => {
      navigate("Chapters");
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

    return () => {
      BackHandler.removeEventListener();
    };
  }, []);

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

const mapStateToProps = (state) => {
  return {
    chapter: state.ChapterReducer.chapter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChapter: (token, index) => {
      dispatch(getChapter(token, index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen);
