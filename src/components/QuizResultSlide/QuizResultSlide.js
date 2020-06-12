import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const QuizResultSlide = props => {
  const correctAnswers = props.correctAnswers.correctAnswers;
  return (
    <View>
      <Text style={styles.title}>
        You have answered {correctAnswers} correctly
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48
  }
});

const mapStateToProps = state => {
  return {
    correctAnswers: state.QuizReducer
  };
};

export default connect(mapStateToProps)(QuizResultSlide);
