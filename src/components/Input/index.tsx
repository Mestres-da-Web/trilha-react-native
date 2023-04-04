import { Text, TextInput, View } from "react-native";
import styles from "./styles";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => {
          console.log(text);
        }}
      />
    </View>
  );
};

export default Input;
