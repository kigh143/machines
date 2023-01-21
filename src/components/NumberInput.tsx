import { TextInput } from "react-native-paper";
import { View } from "react-native";

type Props = {
  value: string;
  onChange: any;
  label: string;
};

const NumberInput: React.FC<Props> = ({ value, onChange, label }) => {
  return (
    <View style={{ margin: 10, }}>
      <TextInput
        label={label}
        value={value}
        onChangeText={(text) => onChange(text)}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default NumberInput;
