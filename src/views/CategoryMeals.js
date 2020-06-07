import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../../__mocks__/categories";
import MealList from "../components/MealList";
import CustomText from "../components/CustomText";

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const meals = availableMeals.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  if (meals.length === 0) {
    return (
      <View style={styles.content}>
        <CustomText>No meals found. Please check filters</CustomText>
      </View>
    );
  }
  return <MealList meals={meals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

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
