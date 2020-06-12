import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ArticleSlideStyles as styles } from "./ArticleSlideStyles";
import { navigate } from "../../navigationRef";

const ArticleSlide = props => {
  return (
    <View style={styles.cardView} data-test="slideContainer">
      {props.endOfList ? (
        <Button
          title="Proceed to the Quiz"
          color="#ff7110"
          onPress={() => navigate("Quiz")}
        ></Button>
      ) : null}
      <Text style={styles.itemTitle} data-test="slideTitle">
        {props.item.item.name}
      </Text>
      <Text style={styles.itemContent} data-test="slideContent">
        {props.item.item.content}
      </Text>
      <Text style={styles.itemContent}>{props.item.item.line1}</Text>
      <Text style={styles.itemContent}>{props.item.item.line2}</Text>
      <Text style={styles.itemContent}>{props.item.item.line3}</Text>
      <Text style={styles.itemContent}>{props.item.item.line4}</Text>
      <Text style={styles.itemContent}>{props.item.item.line5}</Text>
      <Text style={styles.itemContent}>{props.item.item.line6}</Text>
      <Text style={styles.itemContent}>{props.item.item.line7}</Text>
      <Text style={styles.itemContent}>{props.item.item.line8}</Text>
      <Text style={styles.itemContent}>{props.item.item.line9}</Text>
      <Text style={styles.itemContent}>{props.item.item.line10}</Text>
    </View>
  );
};

export default ArticleSlide;
