import React from "react";
import { StyleSheet } from "react-native";
import { CATEGORIES } from "../../__mocks__/categories";
import { MEALS } from "../../__mocks__/meals";
import MealList from "../components/MealList";

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  return <MealList meals={meals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({});

CategoryMeals.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );
  return {
    headerTitle: selectedCategory.categoryName,
  };
};

export default CategoryMeals;