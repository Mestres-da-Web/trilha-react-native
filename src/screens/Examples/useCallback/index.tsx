import { useMemo, useState, memo, useCallback } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

interface Props {
  items: number[];
  numbersProvider: () => number[];
}

const Numbers = ({ items, numbersProvider }: Props) => {
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
      <Text>Segunda lista</Text>
      {numbersProvider().map((item) => {
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

const UseCallbackExample = () => {
  const [text, setText] = useState("");

  const handleChangeText = (text: string) => {
    setText(text);
  };

  const numbers = useMemo(() => {
    return [1, 2, 44, 22];
  }, []);

  // {} === {} // false
  // () => {} === () => {} // false
  // 1 === 1 // true

  const provider = useCallback(() => {
    return [54, 34, 3, 11];
  }, []);

  console.log("Componente UseCallbackExample");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O texto digitado é: {text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        placeholder="Digite aqui"
      />

      <NumbersMemoized items={numbers} numbersProvider={provider} />
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

export default UseCallbackExample;
