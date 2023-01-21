import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { useAppSelector } from "../state/hooks";

const Sidebar: React.FC<any> = (props) => {
  const machine_types = useAppSelector(
    (state) => state.persistedReducer.machineSlice.machineTypes
  );
  return (
    <DrawerContentScrollView {...props} style={styles.menu}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.toggleDrawer();
          props.navigation.navigate("dashboard");
        }}
      >
        <View>
          <Text>Dashboard</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
  },
});

export default Sidebar;
