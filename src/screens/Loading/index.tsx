import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";

type PageProps = {
  navigation: any;
};

const Index: React.FC<PageProps> = ({ navigation }) => {
  useEffect(() => {
    let timeOut = setTimeout(() => {
      navigation.navigate("dashboard");
    }, 1000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <View>
      <Text>Loading screen</Text>
    </View>
  );
};

export default Index;
