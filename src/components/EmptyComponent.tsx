import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { height } = Dimensions.get("screen");

const EmptyComponent = () => {
  return (
    <View style={styles.page}>
      <Text style={[styles.textCenter, styles.heading]}>No Machine Types</Text>
      <Text style={styles.textCenter}>
        Click the add button and add a new machine, it will appear here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    height,
  },
  textCenter: {
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom:7
  },
});

export default EmptyComponent;
