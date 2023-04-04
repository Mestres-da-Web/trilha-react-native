import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Login from "./src/screens/Login";

export default function App() {
  return (
    <View style={{ height: "100%" }}>
      {/* <StatusBar style="dark" /> */}
      <Login />
    </View>
  );
}
