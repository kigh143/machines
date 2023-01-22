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
import {
  AddItem,
  Attribute,
  editItemAnswer,
  removeItem,
} from "../../../state/slices/machineSlice";
import AddItemForm from "../../../components/AddItemForm";

const Index: React.FC<any> = ({ navigation }) => {
  const machineTypes = useAppSelector(
    (state) => state.persistedReducer.machineSlice.machineTypes
  );
  const dispatch = useAppDispatch();
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
          <View style={{ marginVertical: 20 }}>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {item.typeName}
              </Text>
              <TouchableOpacity
               style={{backgroundColor:'orange', padding:8}}
                onPress={() => {
                  const newItem = item.attributes.map(
                    (attribute: Attribute) => {
                      const key = attribute.name.split(" ").join("_");
                      const default_answer =
                        attribute.dataType === "date" ? new Date() : "";
                      return { ...attribute, [key]: default_answer };
                    }
                  );
                  dispatch(AddItem({ id: item.id, item: newItem }));
                }}
              >
                <Text>Add Item</Text>
              </TouchableOpacity>
            </View>

            {item.items.map((val: any, index: number) => (
              <AddItemForm
                item={val}
                setValue={(ans: any) =>
                  dispatch(
                    editItemAnswer({
                      id: item.id,
                      answer: ans,
                      itemIndex: index,
                    })
                  )
                }
                removeItem={() => dispatch(removeItem({ id: item.id, index }))}
                title={item.title}
              />
            ))}
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
