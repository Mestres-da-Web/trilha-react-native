import { useMemo, useState, memo } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

interface Props {
  items: number[];
}

const Numbers = ({ items }: Props) => {
  console.log("Componente Numbers");
  return (
    <View style={styles.itemsContainer}>
      {items.map((item) => {
        return (
          <Text key={item} style={styles.item}>
            Item: {item}
          </Text>
        );
      })}
    </View>
  );
};

const NumbersMemoized = memo(Numbers);

const UseMemoExample = () => {
  const [text, setText] = useState("");

  const handleChangeText = (text: string) => {
    setText(text);
  };

  const numbers = useMemo(() => {
    return [1, 2, 44, 22];
  }, []);

  // {} === {} // false
  // 1 === 1 // true

  console.log("Componente UseMemoExample");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O texto digitado é: {text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        placeholder="Digite aqui"
      />

      <NumbersMemoized items={numbers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    padding: 5,
  },
  itemsContainer: {
    borderWidth: 2,
    borderColor: "green",
    marginTop: 10,
    padding: 5,
  },
  item: {
    fontSize: 20,
  },
});

export default UseMemoExample;
