import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { CATEGORIES } from "../../__mocks__/categories";
import MealItem from "../components/MealItem";
import { MEALS } from "../../__mocks__/meals";

const CategoryMeals = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMeals = (data) => {
    return (
      <MealItem
        title={data.item.title}
        duration={data.item.duration}
        affordability={data.item.affordability}
        complexity={data.item.complexity}
        imageUrl={data.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: data.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMeals}
        style={styles.list}
      ></FlatList>
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );
  return {
    headerTitle: selectedCategory.categoryName,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  list: {
    width: "100%",
  },
});

export default CategoryMeals;
