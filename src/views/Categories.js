import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CATEGORIES } from "../../__mocks__/categories";
import CustomHeaderButton from "../components/HeaderButton";
import CategoryGridTile from "../components/CategoryGridTile";

const Categories = (props) => {
  const renderCategory = (data) => {
    return (
      <CategoryGridTile
        title={data.item.categoryName}
        color={data.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: data.item.id,
            },
          })
        }
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderCategory}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

Categories.navigationOptions = (navData) => {
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
export default Categories;
