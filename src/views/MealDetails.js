import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../../__mocks__/meals";
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
  const selectedMeal = MEALS.find((meal) => meal.id === selectedMealId);
  console.log("selected", selectedMeal);
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
  const selectedMealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === selectedMealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

export default MealDetails;
