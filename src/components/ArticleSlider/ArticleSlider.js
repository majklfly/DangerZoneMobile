import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated
} from "react-native";
import { SwipeUpDownCustom } from "../SwipeUpDown/SwipeUpDown";

import { ArticleSliderStyles as styles } from "./ArticleSliderStyles";
import ArticleSlide from "../ArticleSlide/ArticleSlide";

const { width, height } = Dimensions.get("window");

const ArticleSlider = props => {
  console.log("slider");
  if (props.data) {
    return (
      <View style={styles.container}>
        <FlatList
          data={props.data.articles}
          keyExtractor={(item, index) => "key" + index}
          renderItem={item => {
            return <ArticleSlide item={item} />;
          }}
          horizontal
          pagingEnable
          decelerationRate="fast"
          snapToInterval={width}
          showHorizontalScrollIndicator={false}
        />
        <SwipeUpDownCustom />
      </View>
    );
  }
  return null;
};

export default ArticleSlider;
