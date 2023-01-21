import { View, Text } from "react-native";
import React from "react";

type Props = {
  value: string;
  onChange: any;
  label: string;
};

const NumberInput: React.FC<Props> = ({ value, onChange, label }) => {
  return (
    <View>
      <Text>NumberInput</Text>
    </View>
  );
};

export default NumberInput;
