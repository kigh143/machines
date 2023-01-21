import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../state/hooks";

const Index = () => {
  const state = useAppSelector((state) => state.persistedReducer.machineSlice);
  console.log(state);
  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
};

export default Index;
