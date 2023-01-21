import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DatePickerModal } from "react-native-paper-dates";

type Props = {
  value: string;
  onChange: any;
  label: string;
};

const DateInput: React.FC<Props> = ({ label, onChange, value }) => {
  const [date, setDate] = React.useState(new Date(value));
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
      onChange(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <View
      style={{
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        borderWidth: 1,
        borderColor: "#666",
        paddingHorizontal: 13,
      }}
    >
      <View>
        <TouchableOpacity onPress={() => setOpen(true)}>
          Change {label}
        </TouchableOpacity>
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </View>

      <Text>
        {new Date(value).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </Text>
    </View>
  );
};

export default DateInput;
