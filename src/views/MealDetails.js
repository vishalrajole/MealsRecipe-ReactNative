import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../../__mocks__/meals";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetails = (props) => {
  const selectedMealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === selectedMealId);

  return (
    <View style={styles.container}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetails.navigationOptions = (navigationData) => {
  const selectedMealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === selectedMealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealDetails;
