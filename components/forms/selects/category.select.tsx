import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { Category } from "../../../types/categories.type";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { categories, categoryItem } from "../../../constants";
import Text from "../../typography/text";
import { FormInput } from "../inputs/title.input";

type CategoryButtonProps = {
  category: Category;
  onPress: () => void;
  active: boolean;
};

function CategoryButton({ category, onPress, active }: CategoryButtonProps) {
  const item = categoryItem[category];
  return (
    <Pressable onPress={onPress} style={{ width: "20%" }}>
      <View
        style={{
          alignItems: "center",
          padding: 5,
        }}
      >
        <View
          style={[
            {
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: item.color,
            },
            active
              ? {
                  elevation: 12,
                  shadowColor: item.color,
                  shadowRadius: 12,
                  shadowOffset: { width: 2, height: 2 },
                  shadowOpacity: 0.5,
                }
              : null,
          ]}
        >
          <MaterialCommunityIcons name={item.icon} size={24} color="#F1F1F1" />
        </View>
        <Text variant="subtitle" style={{ marginTop: 10 }}>
          {item.readable}
        </Text>
      </View>
    </Pressable>
  );
}

type CategorySelectRowProp = {
  categories: Category[];
  current: Category | "";
  update: (category: Category | "") => void;
};

function CategorySelectRow({
  categories,
  current,
  update,
}: CategorySelectRowProp) {
  const handleOnPress = (category: Category) => {
    if (category === current) {
      update("");
    } else {
      update(category);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 8,
      }}
    >
      {categories.map((category) => (
        <CategoryButton
          active={category === current}
          onPress={() => handleOnPress(category)}
          key={category}
          category={category}
        />
      ))}
    </View>
  );
}

function CategorySelect(props: FormInput) {
  const pickCategory = props.onChange(props.name);

  const update = (category: Category | "") => {
    pickCategory(category);
  };

  return (
    <View
      style={{
        backgroundColor: "#242424",
        borderRadius: 10,
        padding: 12,
        elevation: 12,
        shadowColor: "#000000",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 15,
        shadowOpacity: 0.25,
      }}
    >
      <CategorySelectRow
        current={props.values[props.name]}
        update={update}
        categories={categories[0]}
      />
      <CategorySelectRow
        current={props.values[props.name]}
        update={update}
        categories={categories[1]}
      />
    </View>
  );
}

export default CategorySelect;
