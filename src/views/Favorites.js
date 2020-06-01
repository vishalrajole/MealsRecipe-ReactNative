import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import { MEALS } from "../../__mocks__/meals";

import { CATEGORIES } from "../../__mocks__/categories";
import CustomHeaderButton from "../components/HeaderButton";

const Favorites = (props) => {
  const favoriteMeals = MEALS.filter((meal) => {
    return meal.id === "m1" || meal.id === "m2";
  });

  return <MealList meals={favoriteMeals} navigation={props.navigation} />;
};

Favorites.navigationOptions = (navData) => {
  return {
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          ></Item>
        </HeaderButtons>
      );
    },
  };
};
const styles = StyleSheet.create({});

export default Favorites;
