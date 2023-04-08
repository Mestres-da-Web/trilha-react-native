import { useEffect, useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import styles from "./styles";

interface User {
  id: number;
  name: string;
  age: number;
}

const getUserById = (userId: string): User | undefined => {
  if (userId === "1") {
    return { id: 1, name: "Jancer", age: 21 };
  }

  if (userId === "2") {
    return { id: 2, name: "Ana", age: 20 };
  }
};

const EffectComponent = () => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState<User | undefined>(undefined);
  const [searchUserId, setSearchUserId] = useState("");

  useEffect(() => {
    console.log("Effect executado");

    if (searchUserId !== "") {
      const userResponse = getUserById(searchUserId);

      setUser(userResponse);
    }

    return () => {
      console.log("EffectComponent removida");
    };
  }, [searchUserId, setUser]);

  console.log("Componente renderizada");

  return (
    <View style={styles.componentContainer}>
      <Text>{user !== undefined ? `Olá, ${user.name}` : "Olá"}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setValue(text);
        }}
        placeholder="Digite um valor"
      />
      <Button
        title="Buscar"
        onPress={() => {
          setSearchUserId(value);
        }}
      />
    </View>
  );
};

const UseEffectExample = () => {
  const [isShowingComponent, setIsShowingComponent] = useState(false);

  const handlePress = () => {
    setIsShowingComponent(!isShowingComponent);
  };

  return (
    <View style={styles.container}>
      <Text>Exemplo useEffect</Text>
      {isShowingComponent === true ? <EffectComponent /> : null}
      <Button title="Alterar componente" onPress={handlePress} />
    </View>
  );
};

export default UseEffectExample;
