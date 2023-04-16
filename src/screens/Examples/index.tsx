import { Image, Text, View } from "react-native";

const Examples = () => {
  return (
    <View>
      <Text>Exemplos</Text>
      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1673264933445-0112f3cdcb2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
        style={{ height: 500, width: 300, backgroundColor: "green" }}
      />
    </View>
  );
};

export default Examples;
