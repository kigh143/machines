import { View, Text } from "react-native";
import React from "react";
import { Attribute, MachineType } from "../state/slices/machineSlice";

type Props = {
  item: any;
};

const AddItemForm: React.FC<Props> = ({ item }) => {
  return (
    <View>
      {item.map((attribute: Attribute) => (
        <View></View>
      ))}
    </View>
  );
};

export default AddItemForm;
