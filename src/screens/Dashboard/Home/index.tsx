import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useAppSelector } from "../../../state/hooks";
import styles from "./styles";
import EmptyComponent from "../../../components/EmptyComponent";

const Index: React.FC<any> = ({ navigation }) => {
  const { machineTypes } = useAppSelector(
    (state) => state.persistedReducer.machineSlice
  );
  console.log(machineTypes);
  const [open, setOPen] = useState(false);

  const openModal = () => setOPen((prev) => !prev);
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
    </SafeAreaView>
  );
};

export default Index;
