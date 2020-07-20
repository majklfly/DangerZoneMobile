import React, { useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import Background from "../Background/Background";

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
          renderItem={(item) => {
            return <ArticleSlide item={item} endOfList={endOfList} />;
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
        <Background />
      </View>
    );
  }
  return null;
};

export default ArticleSlider;
