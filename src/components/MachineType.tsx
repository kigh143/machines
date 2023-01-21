import { View, Text } from "react-native";
import React from "react";
import { MachineType } from "../state/slices/machineSlice";

type Props = {
  machine_type: MachineType;
};

const MachineType: React.FC<Props> = ({ machine_type }) => {
  return (
    <View>
      <Text>{machine_type.typeName}</Text>
      <Text>Fields</Text>
    </View>
  );
};

export default MachineType;
