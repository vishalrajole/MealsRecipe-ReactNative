import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import COLORS from "../styles/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: COLORS.primaryColor }}
        thumbColor={Platform.OS === "android" ? COLORS.primaryColor : ""}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};
const Filters = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log("applied:", appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label={"Gluten-Free"}
        value={isGlutenFree}
        onValueChange={(val) => setIsGlutenFree(val)}
      />
      <FilterSwitch
        label={"Lactose-Free"}
        value={isLactoseFree}
        onValueChange={(val) => setIsLactoseFree(val)}
      />
      <FilterSwitch
        label={"Vegan"}
        value={isVegan}
        onValueChange={(val) => setIsVegan(val)}
      />
      <FilterSwitch
        label={"Vegetarian"}
        value={isVegetarian}
        onValueChange={(val) => setIsVegetarian(val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

Filters.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
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
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={navData.navigation.getParam("save")}
          ></Item>
        </HeaderButtons>
      );
    },
  };
};

export default Filters;
