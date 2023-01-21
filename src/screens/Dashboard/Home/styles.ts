import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

export default StyleSheet.create({
  header: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 13,
    backgroundColor: "#fff",
    elevation: 2,
    marginBottom: 10,
  },
  flatList: {
    padding: 13,
    flex: 1,
    height,
  },
});
