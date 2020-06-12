import React, { useState, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";

import { QuizSlideStyles as styles } from "./QuizSlideStyles";

const QuizSlide = React.forwardRef((props, ref) => {
  const handleAnswer = (isCorrect, index) => {
    props.item.index === ref.current.props.data.length - 1
      ? props.setQuizCompleted(true)
      : props.setQuizIndex(props.quizIndex + 1);

    if (ref.current.props.data.length > props.quizIndex) {
      ref.current.scrollToIndex({
        animated: true,
        index: props.quizIndex
      });
    }

    if (isCorrect === true) {
      props.setCorrectAnswers(props.correctAnswers + 1);
    }
  };

  return (
    <View style={styles.cardView} data-test="quizSlideContainer">
      <Text style={styles.question}>{props.item.item.label}</Text>
      <FlatList
        data-test="quizSlideFlatList"
        data={props.item.item.answers}
        keyExtractor={(item, index) => "key" + index}
        renderItem={item => {
          return (
            <Button
              data-test="answerButton"
              title={item.item.text}
              buttonStyle={styles.button}
              onPress={() => handleAnswer(item.item.is_correct)}
            ></Button>
          );
        }}
      />
    </View>
  );
});

export default QuizSlide;
