import React, { useState } from "react";
import { View, Switch, Text } from "react-native";
import { TextInput } from "react-native-paper";

type Props = {
  value: string;
  onChange: any;
  label: string;
};

const CheckBoxInput: React.FC<Props> = ({ value, label, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View
      style={{
        marginVertical: 5,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>{label}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(text) => {
          onChange(text.toString());
          setIsEnabled((prev) => !prev);
        }}
        value={eval(value)}
      />
    </View>
  );
};

export default CheckBoxInput;
