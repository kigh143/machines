import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
type Props = {
  value: string;
  onChange: any;
  label: string;
};

const CheckBoxInput: React.FC<Props> = ({ value, label, onChange }) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <TextInput
        label={label}
        value={value}
        onChangeText={(text) => onChange(text)}
        keyboardType="default"
      />
    </View>
  );
};

export default CheckBoxInput;
