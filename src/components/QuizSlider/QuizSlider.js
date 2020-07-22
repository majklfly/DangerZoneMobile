import React, { useRef, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import { QuizSliderStyles as styles } from "./QuizSliderStyles";
import QuizSlide from "../QuizSlide/QuizSlide";
import { navigate } from "../../navigationRef";
import { connect } from "react-redux";
import { setQuizResults } from "../../store/actions/quiz";

const { width } = Dimensions.get("window");

const token = "fdsafdsafdas";

const QuizSlider = (props) => {
  const [quizIndex, setQuizIndex] = useState(1);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const flatListRef = useRef();
  const isCompletedRef = useRef(false);

  if (quizCompleted) {
    correctAnswers > 3 ? (isCompletedRef.current = true) : null;
    props.setQuizResults(
      props.token,
      isCompletedRef.current,
      correctAnswers,
      props.userId,
      props.userDataId.id,
      props.chapterId.chapter.id
    );
    navigate("QuizResultSlide");
  }

  if (props.data) {
    return (
      <View style={styles.container} data-test="quizSliderContainer">
        <FlatList
          data-test="quizSliderFlatlist"
          data={props.data.questions}
          keyExtractor={(item, index) => "key" + index}
          scrollEnabled={false}
          renderItem={(item) => {
            return (
              <QuizSlide
                item={item}
                ref={flatListRef}
                quizIndex={quizIndex}
                setQuizIndex={setQuizIndex}
                correctAnswers={correctAnswers}
                setCorrectAnswers={setCorrectAnswers}
                setQuizCompleted={setQuizCompleted}
              />
            );
          }}
          horizontal
          paggingEnable
          decelerationRate="fast"
          ref={flatListRef}
          snapToInterval={width}
          showHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    token: state.AuthReducer.token,
    userId: state.AuthReducer.userId,
    chapterId: state.ChapterReducer,
    userDataId: state.userDataReducer.userdata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuizResults: (
      token,
      is_completed,
      correct_answers,
      userId,
      userDataId,
      chapterId
    ) => {
      dispatch(
        setQuizResults(
          token,
          is_completed,
          correct_answers,
          userId,
          userDataId,
          chapterId
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizSlider);
