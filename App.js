import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/context/store";
import "react-native-url-polyfill/auto";
import "expo-dev-client";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
