import React from "react";
import { Text, StyleSheet } from "react-native";
import { PRIMARY_FONT } from "../styles/variables";

const CustomText = (props) => {
  return <Text style={styles.container}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontFamily: PRIMARY_FONT,
  },
});

export default CustomText;
