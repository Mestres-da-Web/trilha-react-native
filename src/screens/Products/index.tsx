import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

function Products({ navigation, route }: Props) {
  return (
    <View>
      <Text>Hello from Products</Text>
      <Text>Parâmetro enviado: {route.params?.productName}</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Products");
        }}
      />
    </View>
  );
}

export default Products;
