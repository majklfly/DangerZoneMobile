import React from "react";
import { View, Text } from "react-native";
import { QuizResultSlideStyles as styles } from "./QuizResultSlideStyles";
import { connect } from "react-redux";
import LottieView from "lottie-react-native";
import UserBoardContainer from "../../containers/UserBoardContainer/UserBoardContainer";

const QuizResultSlide = (props) => {
  const correctAnswers = props.correctAnswers.correctAnswers;
  if (correctAnswers > 3) {
    return (
      <View style={styles.containerPositive} data-test="positiveContainer">
        <Text style={styles.title}>
          You have answered {correctAnswers} questions correctly
        </Text>
        <LottieView
          source={require("../../../assets/animations/success.json")}
          autoPlay
          loop={false}
          speed={0.8}
          style={styles.animationPositive}
          data-test="positiveAnimation"
        />
        <Text style={styles.footer} accessibilityRole="button">
          What would you like to do know?
        </Text>
        <UserBoardContainer data-test="userBoard" />
      </View>
    );
  }
  return (
    <View style={styles.containerNegative} data-test="negativeContainer">
      <Text style={styles.title}>
        You have answered only {correctAnswers} questions correctly
      </Text>
      <LottieView
        source={require("../../../assets/animations/failure.json")}
        autoPlay
        loop={false}
        speed={0.6}
        style={styles.animationNegative}
        data-test="negativeAnimation"
      />
      <Text style={styles.footer} accessibilityRole="button">
        Maybe you would like to revisit the chapter?
      </Text>
      <UserBoardContainer data-test="userBoard" />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.QuizReducer,
  };
};

export default connect(mapStateToProps)(QuizResultSlide);
