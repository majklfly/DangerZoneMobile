import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, Dimensions } from "react-native";
import { ArticleSlideStyles as styles } from "./ArticleSlideStyles";
import { navigate } from "../../navigationRef";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const ArticleSlide = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <View style={styles.cardView} data-test="slideContainer">
      {props.endOfList ? (
        <Button
          title="Proceed to the Quiz"
          color="#ff7110"
          onPress={() => navigate("Quiz")}
        ></Button>
      ) : null}
      {props.index === 0 && (
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          style={{ alignSelf: "flex-end", color: "white", opacity: 0.7 }}
          size={20}
        />
      )}
      <Text style={styles.itemTitle} data-test="slideTitle">
        {props.item.name}
      </Text>
      <ScrollView style={styles.itemContentContainer}>
        <Text style={styles.itemContent} data-test="slideContent">
          {props.item.content}
        </Text>
        <Text style={styles.itemContent}>{props.item.line1}</Text>
        <Text style={styles.itemContent}>{props.item.line2}</Text>
        <Text style={styles.itemContent}>{props.item.line3}</Text>
        <Text style={styles.itemContent}>{props.item.line4}</Text>
        <Text style={styles.itemContent}>{props.item.line5}</Text>
        <Text style={styles.itemContent}>{props.item.line6}</Text>
        <Text style={styles.itemContent}>{props.item.line7}</Text>
        <Text style={styles.itemContent}>{props.item.line8}</Text>
        <Text style={styles.itemContent}>{props.item.line9}</Text>
        <Text style={styles.itemContent}>{props.item.line10}</Text>
      </ScrollView>
    </View>
  );
};

export default ArticleSlide;
