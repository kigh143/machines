import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import styles from "./styles";

type PageProps = {
  navigation: any;
};

const Index: React.FC<PageProps> = ({ navigation }) => {
  useEffect(() => {
    let timeOut = setTimeout(() => {
      navigation.navigate("dashboard");
    }, 5000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <View style={styles.page}>
      <Text style={[styles.heading, styles.textCenter]}>Machines</Text>
      <Text style={styles.textCenter}>
        Manager all your machines in one place.
      </Text>
    </View>
  );
};

export default Index;
