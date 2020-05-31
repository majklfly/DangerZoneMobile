import React, { useRef } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import { QuizSliderStyles as styles } from "./QuizSliderStyles";
import QuizSlide from "../QuizSlide/QuizSlide";

const { width } = Dimensions.get("window");

const QuizSlider = props => {
  const flatListRef = useRef();

  if (props.data) {
    return (
      <View style={styles.container}>
        <FlatList
          data={props.data.questions}
          keyExtractor={(item, index) => "key" + index}
          renderItem={item => {
            return <QuizSlide item={item} ref={flatListRef} />;
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

export default QuizSlider;
