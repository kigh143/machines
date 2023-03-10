import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Loading from "./screens/Loading";
import Home from "./screens/Dashboard/Home";
import MachineType from "./screens/Dashboard/MachineType";
import ManageTypes from "./screens/Dashboard/Manage";
import Sidebar from "./components/Sidebar";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Dashboard = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerType: width >= 768 ? "permanent" : null,
    }}
    initialRouteName="home"
    useLegacyImplementation={false}
    drawerContent={(props: any) => <Sidebar {...props} />}
  >
    <Drawer.Screen name="home" component={Home} />
    <Drawer.Screen name="machineType" component={MachineType} />
    <Stack.Screen name="manageTypes" component={ManageTypes} />
  </Drawer.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="loading">
        <Stack.Screen name="loading" component={Loading} />
        <Stack.Screen name="dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
