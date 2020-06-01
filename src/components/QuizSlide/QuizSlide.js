import React, { useState, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";

import { QuizSlideStyles as styles } from "./QuizSlideStyles";

const QuizSlide = React.forwardRef((props, ref) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const questionIndexRef = useRef(0);

  const handleAnswer = isCorrect => {
    questionIndexRef.current++;
    console.log("questionIndex", questionIndexRef.current);
    ref.current.scrollToIndex({
      index: questionIndexRef.current,
      animated: true
    });
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
