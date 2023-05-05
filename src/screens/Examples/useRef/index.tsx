import { useRef } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const UseRefExample = () => {
  const inputRef = useRef<TextInput>(null);

  const handlePress = () => {
    inputRef.current?.blur();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UseRef</Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Digite aqui"
      />

      <Button title="Ok" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 5 },
  title: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
  },
});

export default UseRefExample;
