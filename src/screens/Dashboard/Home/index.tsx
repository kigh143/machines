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
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const Index: React.FC<any> = ({ navigation }) => {
  const machineTypes = useAppSelector(
    (state) => state.persistedReducer.machineSlice.machineTypes
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>Dashboard</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={machineTypes}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item.typeName}</Text>
          </View>
        )}
        ListEmptyComponent={<EmptyComponent />}
        contentContainerStyle={{
          padding: 13,
        }}
      />
    </SafeAreaView>
  );
};

export default Index;
