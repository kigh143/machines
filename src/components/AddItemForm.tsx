import { View, Text } from "react-native";
import React from "react";
import { Attribute, MachineType } from "../state/slices/machineSlice";
import Input from "./Input";
import CheckBoxInput from "./CheckBoxInput";
import DateInput from "./DateInput";
import NumberInput from "./NumberInput";

type Props = {
  item: any;
  setValue: any;
};

const AddItemForm: React.FC<Props> = ({ item, setValue }) => {
  return (
    <View style={{ elevation: 2, backgroundColor: "#fff" }}>
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
    </View>
  );
};

export default AddItemForm;
