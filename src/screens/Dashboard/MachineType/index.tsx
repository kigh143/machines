import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import {
  AddItem,
  Attribute,
  editItemAnswer,
} from "../../../state/slices/machineSlice";
import AddItemForm from "../../../components/AddItemForm";
import EmptyComponent from "../../../components/EmptyComponent";
import styles from "./styles";

const index = () => {
  const { activeMachineType, machineTypes } = useAppSelector(
    (state) => state.persistedReducer.machineSlice
  );
  const [machineIndex, setMachineIndex] = useState(0);

  const dispatch = useAppDispatch();

  const addItem = () => {
    const item = activeMachineType.attributes.map((attribute: Attribute) => {
      const key = attribute.name.split(" ").join("_");
      const default_answer = attribute.dataType === "date" ? new Date() : "";
      return { ...attribute, [key]: default_answer };
    });
    dispatch(AddItem({ id: activeMachineType.id, item }));
  };

  const setValue = (answer: any, itemIndex: number) => {
    dispatch(editItemAnswer({ id: activeMachineType.id, answer, itemIndex }));
  };

  useEffect(() => {
    const currentIndex = machineTypes.findIndex(
      (item) => item.id === activeMachineType.id
    );
    setMachineIndex(currentIndex);
  }, []);

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
          <Text
            style={{ fontWeight: "bold", backgroundColor: "red", padding: 8 }}
          >
            Add new Item
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={machineTypes[machineIndex].items}
        renderItem={({ item, index }) => (
          <AddItemForm item={item} setValue={(text) => setValue(text, index)} />
        )}
        ListEmptyComponent={() => <EmptyComponent />}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default index;
