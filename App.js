import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { AppStack } from "./app/navigators";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./app/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <AppStack />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
