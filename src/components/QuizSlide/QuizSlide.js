import React, { useState, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";

import { QuizSlideStyles as styles } from "./QuizSlideStyles";

const QuizSlide = React.forwardRef((props, ref) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  ref.current ? console.log(ref.current.props.data.length) : null;

  const handleAnswer = isCorrect => {
    ref.current.scrollToIndex({
      animated: true,
      index: props.quizIndex
    });
    props.quizIndex === ref.current.props.data.length - 1
      ? console.log("finish")
      : props.setQuizIndex(props.quizIndex + 1);

    console.log("questionIndex", props.quizIndex);
    if (isCorrect === true) {
      setCorrectAnswers(correctAnswers + 1);
      return console.log("hurray");
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
