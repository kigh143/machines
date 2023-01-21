import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import {
  addNewField,
  Attribute,
  EditFieldName,
  editMachineType,
  removeField,
  setTitleField,
} from "../state/slices/machineSlice";
import NumberInput from "./NumberInput";
import DateInput from "./DateInput";
import CheckBoxInput from "./CheckBoxInput";
import { Picker } from "@react-native-picker/picker";

const AddTypeForm: React.FC<any> = ({ activeMachineType }) => {
  const { machineTypes } = useAppSelector(
    (state) => state.persistedReducer.machineSlice
  );
  const [machineIndex, setMachineIndex] = useState(
    machineTypes.findIndex((item) => item.id === activeMachineType.id)
  );
  const [selected, setSelected] = useState("");

  const dispatch = useAppDispatch();

  return (
    <View style={styles.modal}>
      <View>
        <Text>{machineTypes[machineIndex].typeName}</Text>
        <Input
          label="Type Name"
          value={machineTypes[machineIndex].typeName}
          onChange={(text) =>
            dispatch(
              editMachineType({ ...machineTypes[machineIndex], typeName: text })
            )
          }
        />
        {machineTypes[machineIndex].attributes.map(
          (field: Attribute, index: number) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Input
                    label={field.dataType}
                    value={field.name}
                    onChange={(text) =>
                      dispatch(
                        EditFieldName({
                          id: activeMachineType.id,
                          index,
                          attribute: {
                            dataType: "text",
                            name: text,
                          },
                        })
                      )
                    }
                  />
                </View>

                <TouchableOpacity
                  onPress={() =>
                    dispatch(removeField({ index, id: activeMachineType.id }))
                  }
                >
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            );
          }
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 60,
            paddingVertical: 10,
          }}
        >
          <View>
            <Text>Add Field</Text>
            <Picker
              selectedValue={selected}
              onValueChange={(itemValue, itemIndex) => {
                if (itemValue === "") return;
                dispatch(
                  addNewField({
                    id: activeMachineType.id,
                    attribute: {
                      dataType: itemValue,
                      name: "",
                    },
                  })
                );
              }}
            >
              <Picker.Item label="Select type" value="" />
              <Picker.Item label="Text" value="text" />
              <Picker.Item label="Number" value="number" />
              <Picker.Item label="Date" value="date" />
              <Picker.Item label="Checkbox" value="checkbox" />
            </Picker>
          </View>

          <View>
            <Text>Set title Field</Text>
            <Picker
              selectedValue={selected}
              onValueChange={(itemValue, itemIndex) => {
                if (itemValue === "") return;
                dispatch(
                  setTitleField({
                    id: activeMachineType.id,
                    title: itemValue,
                  })
                );
              }}
            >
              <Picker.Item label="Select title Filed" value="" />
              {machineTypes[machineIndex].attributes.map(
                (attribute: Attribute) => (
                  <Picker.Item label={attribute.name} value={attribute.name} />
                )
              )}
            </Picker>
          </View>
        </View>
        ; ; ;
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 5,
    backgroundColor: "#fff",
    marginVertical: 10,
    elevation: 3,
  },
});

export default AddTypeForm;
