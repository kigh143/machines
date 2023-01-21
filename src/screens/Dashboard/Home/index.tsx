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

const Index: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
