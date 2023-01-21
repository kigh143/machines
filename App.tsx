import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store, persister } from "./src/state/store";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/Navigation";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
