import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Input from "./Input";

const AddTypeForm: React.FC<any> = ({ close }) => {
  return (
    <View style={styles.modal}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 56,
          marginBottom: 10,
        }}
      >
        <Text>AddTpeForm</Text>
        <TouchableOpacity onPress={() => close()}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Input
          label="Type Name"
          value=""
          onChange={(text) => console.log(text)}
        />
        <Input
          label="Type Name"
          value=""
          onChange={(text) => console.log(text)}
        />

        <TouchableOpacity onPress={() => console.log("add field")}>
          <Text>Add Field</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("add title field")}>
          <Text>Add title Field</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 13,
    backgroundColor: "#eee",
    flex: 1,
  },
});

export default AddTypeForm;
