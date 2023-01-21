import { TextInput } from "react-native-paper";

type Props = {
  value: string;
  onChange: any;
  label: string;
};

const NumberInput: React.FC<Props> = ({ value, onChange, label }) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(text) => onChange(text)}
      keyboardType="number-pad"
    />
  );
};

export default NumberInput;
