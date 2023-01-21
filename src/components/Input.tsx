import React from "react";
import { TextInput } from "react-native-paper";
type Props = {
  value: string;
  onChange: any;
  label: string;
};

const Input: React.FC<Props> = ({ value, label, onChange }) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(text) => onChange(text)}
      keyboardType="default"
    />
  );
};

export default Input;
