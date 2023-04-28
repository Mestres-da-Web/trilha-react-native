import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { Context } from "./useContext";

const Examples = () => {
  const contextData = useContext(Context);

  return (
    <View>
      <Text>Exemplos</Text>
      <Text>Nome do usuário: {contextData.name}</Text>
      <Text>Email do usuário: {contextData.email}</Text>
      <Button
        title="Atualizar nome"
        onPress={() => {
          contextData.updateUsername("Jancer2");
        }}
      />
    </View>
  );
};

export default Examples;
