import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store, persister } from "./src/state/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </PersistGate>
    </Provider>
  );
}
