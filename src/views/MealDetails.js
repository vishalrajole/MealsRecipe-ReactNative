import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";
import CustomHeaderButton from "../components/HeaderButton";
import CustomText from "../components/CustomText";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <CustomText>{props.children}</CustomText>
    </View>
  );
};

const MealDetails = (props) => {
  const selectedMealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector((state) => state.meals.meals);

  const isMealFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === selectedMealId)
  );
  const selectedMeal = availableMeals.find(
    (meal) => meal.id === selectedMealId
  );
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    console.log("dispatching toggleFavorite: ", selectedMeal.id);
    dispatch(toggleFavorite(selectedMealId));
  }, [dispatch, selectedMealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({
      isMealFavorite: isMealFavorite,
    });
  }, [isMealFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.mealInfo}>
        <CustomText>{selectedMeal.duration}m</CustomText>
        <CustomText>{selectedMeal.complexity.toUpperCase()}</CustomText>
        <CustomText>{selectedMeal.affordability.toUpperCase()}</CustomText>
      </View>
      <Text style={styles.title}>Ingrediants</Text>
      <Text style={styles.subTitle}>List of Ingrediants</Text>
      {selectedMeal.ingredients.map((ingredient) => {
        return <ListItem key={ingredient}>{ingredient}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      <Text style={styles.subTitle}>List of step</Text>
      {selectedMeal.steps.map((step) => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
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
  title: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  subTitle: {
    marginLeft: 10,
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 5,
    borderColor: "#ccc",
  },
});

MealDetails.navigationOptions = (navigationData) => {
  const selectedMealTitle = navigationData.navigation.getParam("title");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isMealFavorite = navigationData.navigation.getParam("isMealFavorite");
  return {
    headerTitle: selectedMealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isMealFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetails;
