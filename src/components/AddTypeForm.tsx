import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import {
  addNewField,
  Attribute,
  EditFieldName,
  editMachineType,
} from "../state/slices/machineSlice";
import NumberInput from "./NumberInput";
import DateInput from "./DateInput";
import CheckBoxInput from "./CheckBoxInput";

const AddTypeForm: React.FC<any> = ({ close }) => {
  const { activeMachineType, machineTypes } = useAppSelector(
    (state) => state.persistedReducer.machineSlice
  );
  const [machineIndex, setMachineIndex] = useState(
    machineTypes.findIndex((item) => item.id === activeMachineType.id)
  );

  const dispatch = useAppDispatch();

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
            if (field.dataType === "text") {
              return (
                <Input
                  label={field.name}
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
              );
            }
            if (field.dataType === "number") {
              return (
                <NumberInput
                  label={field.name}
                  value={field.name}
                  onChange={(text) =>
                    dispatch(
                      EditFieldName({
                        id: activeMachineType.id,
                        index,
                        attribute: {
                          dataType: "number",
                          name: text,
                        },
                      })
                    )
                  }
                />
              );
            }
            if (field.dataType === "date") {
              return (
                <DateInput
                  label={field.name}
                  value={field.name}
                  onChange={(text) =>
                    dispatch(
                      EditFieldName({
                        id: activeMachineType.id,
                        index,
                        attribute: {
                          dataType: "date",
                          name: text,
                        },
                      })
                    )
                  }
                />
              );
            }
            if (field.dataType === "checkbox") {
              return (
                <CheckBoxInput
                  label={field.name}
                  value={field.name}
                  onChange={(text) =>
                    dispatch(
                      EditFieldName({
                        id: activeMachineType.id,
                        index,
                        attribute: {
                          dataType: "checkbox",
                          name: text,
                        },
                      })
                    )
                  }
                />
              );
            }
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
          <TouchableOpacity
            onPress={() => {
              dispatch(
                addNewField({
                  id: activeMachineType.id,
                  attribute: {
                    dataType: "number",
                    name: "",
                  },
                })
              );
            }}
          >
            <Text>Add Field</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("add title field")}>
            <Text>Add title Field</Text>
          </TouchableOpacity>
        </View>
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
