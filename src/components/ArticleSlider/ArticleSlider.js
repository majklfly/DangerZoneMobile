import React, { useState } from "react";
import { View, FlatList, Dimensions } from "react-native";

import { ArticleSliderStyles as styles } from "./ArticleSliderStyles";
import ArticleSlide from "../ArticleSlide/ArticleSlide";

const { width, height } = Dimensions.get("window");

const ArticleSlider = (props) => {
  const [endOfList, setEndOfList] = useState(false);

  if (props.data) {
    return (
      <View style={styles.container} data-test="articleSliderContainer">
        <FlatList
          data={props.data.articles}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item, index }) => {
            return (
              <ArticleSlide item={item} endOfList={endOfList} index={index} />
            );
          }}
          horizontal
          pagingEnable
          decelerationRate="fast"
          snapToInterval={width}
          showHorizontalScrollIndicator={false}
          data-test="articleSliderFlatlist"
          onEndReachedThreshold={1}
          onEndReached={() => setEndOfList(true)}
        />
      </View>
    );
  }
  return null;
};

export default ArticleSlider;
