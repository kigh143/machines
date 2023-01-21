import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Loading from "./screens/Loading";
import Home from "./screens/Dashboard/Home";
import MachineType from "./screens/Dashboard/MachineType";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Dashboard = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="home" component={Home} />
    <Drawer.Screen name="machineType" component={MachineType} />
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
