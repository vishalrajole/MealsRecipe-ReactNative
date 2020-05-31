import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Categories from "../views/Categories";
import CategoryMeals from "../views/CategoryMeals";
import MealDetails from "../views/MealDetails";
import COLORS from "../styles/colors";

const MealsNavigation = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : COLORS.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigation);
