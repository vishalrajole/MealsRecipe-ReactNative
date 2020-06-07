import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

const MealList = (props) => {
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
              title: data.item.title,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={props.meals}
        renderItem={renderMeals}
        style={styles.list}
      ></FlatList>
    </View>
  );
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
export default MealList;
