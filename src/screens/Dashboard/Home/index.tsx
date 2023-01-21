import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import styles from "./styles";
import EmptyComponent from "../../../components/EmptyComponent";
import AddTypeForm from "../../../components/AddTypeForm";
import {
  addMachineType,
  MachineType,
} from "../../../state/slices/machineSlice";

const Index: React.FC<any> = ({ navigation }) => {
  const { machineTypes } = useAppSelector(
    (state) => state.persistedReducer.machineSlice
  );
  const dispatch = useAppDispatch();

  const [open, setOPen] = useState(false);

  const openModal = () => {
    // create a new machine type object
    const newMachineType: MachineType = {
      id: uuidv4(),
      attributes: [
        {
          dataType: "text",
          name: "",
        },
      ],
      typeName: "",
      title: "",
    };
    dispatch(addMachineType(newMachineType));

    setOPen((prev) => !prev);
  };

  const toggleMenu = () => navigation.toggleDrawer();

  const renderTypes = ({ item }) => (
    <View>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
          <Text>Add New Type</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={machineTypes}
        renderItem={renderTypes}
        ListEmptyComponent={() => <EmptyComponent />}
        contentContainerStyle={styles.flatList}
      />
      <Modal animationType="slide" transparent={true} visible={open}>
        <AddTypeForm close={() => setOPen(false)} />
      </Modal>
    </SafeAreaView>
  );
};

export default Index;
