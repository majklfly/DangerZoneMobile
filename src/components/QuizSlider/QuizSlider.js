import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";

import { QuizSliderStyles as styles } from "./QuizSliderStyles";
import QuizSlide from "../QuizSlide/QuizSlide";

const { width } = Dimensions.get("window");

const QuizSlider = props => {
  if (props.data) {
    return (
      <View style={styles.container}>
        <FlatList
          data={props.data.questions}
          keyExtractor={(item, index) => "key" + index}
          renderItem={item => {
            return <QuizSlide item={item} />;
          }}
          horizontal
          paggingEnable
          decelerationRate="fast"
          snapToInterval={width}
          showHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
  return null;
};

export default QuizSlider;
