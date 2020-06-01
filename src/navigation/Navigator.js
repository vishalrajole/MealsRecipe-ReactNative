import React from "react";
import { Platform, Text } from "react-native";
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
import { PRIMARY_FONT, PRIMARY_FONT_BOLD } from "../styles/variables";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? COLORS.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: PRIMARY_FONT_BOLD,
  },
  headerBackTitleStyle: {
    fontFamily: PRIMARY_FONT,
  },
  headerTintColor: Platform.OS === "android" ? "white" : COLORS.primaryColor,
};

const MealsNavigationStack = createStackNavigator(
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
    defaultNavigationOptions,
  }
);

const FavoritesNavigationStack = createStackNavigator(
  {
    Favorites: Favorites,
    MealDetails: MealDetails,
  },
  {
    defaultNavigationOptions,
  }
);

const tabsConfig = {
  Home: {
    screen: MealsNavigationStack,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarLabel:
        Platform.OS === " android" ? (
          <Text style={{ fontFamily: PRIMARY_FONT_BOLD }}>Home</Text>
        ) : (
          "Home"
        ),
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: COLORS.primaryColor,
    },
  },
  Favorites: {
    screen: FavoritesNavigationStack,
    navigationOptions: {
      headerTitle: "Favorites",
      tabBarLabel:
        Platform.OS === " android" ? (
          <Text style={{ fontFamily: PRIMARY_FONT_BOLD }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: COLORS.accentColor,
    },
  },
};

const TabNavigationStack =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsConfig, {
        activeColor: "#fff",
        shifting: true,
        barStyle: {
          backgroundColor: COLORS.primaryColor,
        },
      })
    : createBottomTabNavigator(tabsConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: PRIMARY_FONT,
          },
          activeTintColor: COLORS.accentColor,
        },
      });

const FilterNavigationStack = createStackNavigator(
  {
    Filters: {
      screen: Filters,
      navigationOptions: {
        headerTitle: "Filters",
      },
    },
  },
  {
    defaultNavigationOptions,
  }
);

const DrawerNavigationStack = createDrawerNavigator(
  {
    Favorites: {
      screen: TabNavigationStack,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FilterNavigationStack,
  },
  {
    contentOptions: {
      activeTintColor: COLORS.accentColor,
      labelStyle: {
        fontFamily: PRIMARY_FONT_BOLD,
      },
    },
  }
);
export default createAppContainer(DrawerNavigationStack);
