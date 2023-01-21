import { View, Text } from 'react-native'
import React from 'react'
type Props = {
  value: string;
  onChange: any;
  label: string;
};

const CheckBoxInput: React.FC<Props> = ({ value, onChange, label }) => {
  return (
    <View>
      <Text>CheckBoxInput</Text>
    </View>
  );
};

export default CheckBoxInput