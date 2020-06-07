import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import CustomHeaderButton from "../components/HeaderButton";

const Favorites = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

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
