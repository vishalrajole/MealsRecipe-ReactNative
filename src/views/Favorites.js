import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import CustomText from "../components/CustomText";
import CustomHeaderButton from "../components/HeaderButton";

const Favorites = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.emptyFavorite}>
        <CustomText>No Favorite meals found.</CustomText>
      </View>
    );
  }
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
const styles = StyleSheet.create({
  emptyFavorite: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Favorites;
