import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";

import { navigate } from "../../navigationRef";

import QuizSlider from "../../components/QuizSlider/QuizSlider";

import { connect } from "react-redux";
import { getQuizData } from "../../store/actions/quiz";

const QuizScreen = props => {
  const retrieveData = async () => {
    const chapterId = await AsyncStorage.getItem("currentChapterIndex");
    const chapterIdInt = parseInt(chapterId);
    const token = await AsyncStorage.getItem("token");
    props.getQuizData(token, chapterIdInt);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <View>
      <QuizSlider data={props.quiz} />
      <Button title="Chapterss" onPress={() => navigate("Chapters")}></Button>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    quiz: state.QuizReducer.quiz
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuizData: (token, chapterId) => {
      dispatch(getQuizData(token, chapterId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
