import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../../__mocks__/meals";
import CustomHeaderButton from "../components/HeaderButton";
import CustomText from "../components/CustomText";

const MealDetails = (props) => {
  const selectedMealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === selectedMealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.mealInfo}>
        <CustomText>{selectedMeal.duration}m</CustomText>
        <CustomText>{selectedMeal.complexity.toUpperCase()}</CustomText>
        <CustomText>{selectedMeal.affordability.toUpperCase()}</CustomText>
      </View>
      <Text>Ingrediants</Text>
      <Text>List of Ingrediants</Text>
      <Text>Steps</Text>
      <Text>List of step</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  mealInfo: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
});

MealDetails.navigationOptions = (navigationData) => {
  const selectedMealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === selectedMealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

export default MealDetails;
