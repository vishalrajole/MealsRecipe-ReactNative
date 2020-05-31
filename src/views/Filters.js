import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Filters = () => {
  return (
    <View style={styles.container}>
      <Text>filter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Filters;
