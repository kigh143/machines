import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import styles from "./styles";
import EmptyComponent from "../../../components/EmptyComponent";
import AddTypeForm from "../../../components/AddTypeForm";
import {
  addMachineType,
  MachineType,
} from "../../../state/slices/machineSlice";

type Props = {
  navigation:any;
}

const Index: React.FC<Props> = ({ navigation }) => {
  const { machineTypes } = useAppSelector(
    (state) => state.persistedReducer.machineSlice
  );
  const dispatch = useAppDispatch();

  const addNewMachineType = () => {
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
  };

  const toggleMenu = () => navigation.toggleDrawer();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text>Manage Types</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addNewMachineType}>
          <Text>Add New Type</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={machineTypes}
        renderItem={({ item }) => <AddTypeForm activeMachineType={item} />}
        ListEmptyComponent={() => <EmptyComponent />}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default Index;
