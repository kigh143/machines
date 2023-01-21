import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Attribute, MachineType } from "../state/slices/machineSlice";
import Input from "./Input";
import CheckBoxInput from "./CheckBoxInput";
import DateInput from "./DateInput";
import NumberInput from "./NumberInput";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  item: any;
  setValue: any;
  removeItem: any;
  title: string;
};

const AddItemForm: React.FC<Props> = ({
  item,
  setValue,
  removeItem,
  title,
}) => {
  return (
    <View
      style={{
        elevation: 4,
        backgroundColor: "#fff",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#888",
        padding: 15,
      }}
    >
      <Text>{title && item.find((val) => title in val)[title]}</Text>
      {item.map((value: any, index: number) => {
        const key = value.name.split(" ").join("_");
        if (value.dataType === "text") {
          return (
            <Input
              label={value.name}
              value={value[key]}
              onChange={(text) => setValue({ [key]: text })}
              key={index}
            />
          );
        }
        if (value.dataType === "number") {
          return (
            <NumberInput
              label={value.name}
              value={value[key]}
              onChange={(text) => setValue({ [key]: text })}
              key={index}
            />
          );
        }
        if (value.dataType === "date") {
          return (
            <DateInput
              label={value.name}
              value={value[key]}
              onChange={(text) => setValue({ [key]: text })}
              key={index}
            />
          );
        }
        if (value.dataType === "checkbox") {
          return (
            <CheckBoxInput
              label={value.name}
              value={value[key]}
              onChange={(text) => setValue({ [key]: text })}
              key={index}
            />
          );
        }
      })}
      <TouchableOpacity onPress={() => removeItem()}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItemForm;
