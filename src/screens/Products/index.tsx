import { Button, Text, View } from "react-native";

interface ProductsProps {
  navigation: any;
}

function Products({ navigation }: ProductsProps) {
  return (
    <View>
      <Text>Hello from Products</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}

export default Products;
