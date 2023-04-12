import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Products from "./src/screens/Products";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: "Produtos",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
