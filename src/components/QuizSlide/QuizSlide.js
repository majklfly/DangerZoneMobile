import React from "react";
import { View, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";

import { QuizSlideStyles as styles } from "./QuizSlideStyles";

const QuizSlide = props => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.question}>{props.item.item.label}</Text>
      <FlatList
        data={props.item.item.answers}
        keyExtractor={(item, index) => "key" + index}
        renderItem={item => {
          console.log(item.item.text);
          return (
            <Button title={item.item.text} buttonStyle={styles.button}></Button>
          );
        }}
      />
    </View>
  );
};

export default QuizSlide;
