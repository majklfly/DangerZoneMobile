import React from "react";
import { View, FlatList, Dimensions } from "react-native";

import { ArticleSliderStyles as styles } from "./ArticleSliderStyles";
import ArticleSlide from "../ArticleSlide/ArticleSlide";

const { width, height } = Dimensions.get("window");

const ArticleSlider = props => {
  if (props.data) {
    return (
      <View style={styles.container} data-test="articleSliderContainer">
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
          data-test="articleSliderFlatlist"
        />
      </View>
    );
  }
  return null;
};

export default ArticleSlider;
