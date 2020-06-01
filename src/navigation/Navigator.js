import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../views/Categories";
import CategoryMeals from "../views/CategoryMeals";
import MealDetails from "../views/MealDetails";
import Favorites from "../views/Favorites";
import Filters from "../views/Filters";
import COLORS from "../styles/colors";

const defaultOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? COLORS.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : COLORS.primaryColor,
  },
};
const MealsNavigation = createStackNavigator(
  {
    Categories: {
      screen: Categories,
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetails: {
      screen: MealDetails,
    },
  },
  {
    initialRouteName: "Categories",
    defaultOptions,
  }
);

const FavoritesStack = createStackNavigator(
  {
    Favorites: Favorites,
    MealDetails: MealDetails,
  },
  defaultOptions
);
const tabsConfig = {
  Home: {
    screen: MealsNavigation,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: COLORS.primaryColor,
    },
  },
  Favorites: {
    screen: FavoritesStack,
    navigationOptions: {
      headerTitle: "Favorites",
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: COLORS.accentColor,
    },
  },
};

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsConfig, {
        activeColor: "#fff",
        shifting: true,
      })
    : createBottomTabNavigator(tabsConfig, {
        tabBarOptions: {
          activeTintColor: COLORS.accentColor,
        },
      });

const filterStack = createStackNavigator({
  Filters: {
    screen: Filters,
    navigationOptions: {
      headerTitle: "Filters",
    },
  },
});

const drawerNavigator = createDrawerNavigator({
  Favorites: TabNavigator,
  Filters: filterStack,
});
export default createAppContainer(drawerNavigator);
