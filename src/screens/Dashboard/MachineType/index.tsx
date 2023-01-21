import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { AddItem, Attribute } from "../../../state/slices/machineSlice";
import AddItemForm from "../../../components/AddItemForm";
import EmptyComponent from "../../../components/EmptyComponent";
import styles from "./styles";

const index = () => {
  const { activeMachineType, machineTypes } = useAppSelector(
    (state) => state.persistedReducer.machineSlice
  );

  const [machineIndex, setMachineIndex] = useState(
    machineTypes.findIndex((item) => item.id === activeMachineType.id)
  );

  const dispatch = useAppDispatch();

  const addItem = () => {
    const item = activeMachineType.attributes.reduce(
      (obj: any, attribute: Attribute) => {
        const key = attribute.name.split(" ").join("_");
        return { ...obj, [key]: "" };
      },
      {}
    );
    dispatch(AddItem({ id: activeMachineType.id, item }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          height: 56,
          elevation: 3,
          backgroundColor: "#fff",
        }}
      >
        <Text>{activeMachineType.typeName}</Text>
        <TouchableOpacity onPress={addItem}>
          <Text style={{ fontWeight: "bold" }}>Add new Item</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={machineTypes[machineIndex].items}
        renderItem={({ item }) => <AddItemForm items={item} />}
        ListEmptyComponent={() => <EmptyComponent />}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default index;
