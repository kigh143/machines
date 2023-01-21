import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { MachineType, setActiveType } from "../state/slices/machineSlice";

const Sidebar: React.FC<any> = (props) => {
  const machine_types = useAppSelector(
    (state) => state.persistedReducer.machineSlice.machineTypes
  );
  const dispatch = useAppDispatch();
  return (
    <DrawerContentScrollView {...props} style={styles.menu}>
      <View
        style={{
          height: 56,
          marginBottom: 10,
          justifyContent: "center",
          paddingHorizontal: 13,
          elevation: 3,
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Machine Inventory</Text>
      </View>
      <View style={{ paddingHorizontal: 13 }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("home");
          }}
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText}>Dashboard</Text>
        </TouchableOpacity>

        {machine_types.map((machine_types: MachineType) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("machineType");
              dispatch(setActiveType(machine_types));
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuItemText}>{machine_types.typeName}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("manageTypes");
          }}
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText}>Manage Types</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  menuItem: {
    marginVertical: 5,
    padding: 5,
    backgroundColor: "#eee",
  },
  menuItemText: {
    fontWeight: "500",
    textTransform: "capitalize",
  },
});

export default Sidebar;
