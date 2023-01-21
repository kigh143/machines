import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store, persister } from "./src/state/store";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
