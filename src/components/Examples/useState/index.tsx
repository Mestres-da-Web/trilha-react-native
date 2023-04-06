import { useState } from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles";

const Component = () => {
  return (
    <View style={styles.componentContainer}>
      <Text>Componente</Text>
    </View>
  );
};

const UseStateExample = () => {
  const [isShowingComponent, setIsShowingComponent] = useState(false);

  console.log("Componente renderizada");

  const handlePress = () => {
    setIsShowingComponent(!isShowingComponent);
  };

  return (
    <View style={styles.container}>
      <Text>Exemplo useState</Text>
      {isShowingComponent === true ? <Component /> : null}
      <Button title="Alterar componente" onPress={handlePress} />
    </View>
  );
};

export default UseStateExample;
