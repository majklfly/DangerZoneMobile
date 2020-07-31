import React, { useEffect } from "react";
import { View, AsyncStorage, BackHandler } from "react-native";

import { navigate } from "../../navigationRef";
import LottieView from "lottie-react-native";

import QuizSlider from "../../components/QuizSlider/QuizSlider";
import { QuizScreenStyles as styles } from "./QuizScreenStyles";
import UserBoardContainer from "../UserBoardContainer/UserBoardContainer";

import { connect } from "react-redux";
import { getQuizData } from "../../store/actions/quiz";

const QuizScreen = (props) => {
  const retrieveData = async () => {
    const chapterId = await AsyncStorage.getItem("currentChapterIndex");
    const chapterIdInt = parseInt(chapterId);
    const token = await AsyncStorage.getItem("token");
    props.getQuizData(token, chapterIdInt);
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
  if (props.quiz) {
    return (
      <View data-test="quizContainer">
        <QuizSlider data={props.quiz} data-test="quizSlider" />
        <UserBoardContainer data-test="quizSwipe" />
      </View>
    );
  }
  return (
    <LottieView
      source={require("../../../assets/animations/7314-loading.json")}
      autoPlay
      loop
    />
  );
};

const mapStateToProps = (state) => {
  return {
    quiz: state.QuizReducer.quiz,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuizData: (token, chapterId) => {
      dispatch(getQuizData(token, chapterId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
