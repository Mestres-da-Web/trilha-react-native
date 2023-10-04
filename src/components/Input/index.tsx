import { Text, TextInput, View } from "react-native";
import styles from "./styles";

interface InputProps {
  label: string;
  placeholder: string;
  onChange?: (text: string) => void;
}

const Input = ({ label, placeholder, onChange }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => {
          if (onChange) onChange(text);
        }}
      />
    </View>
  );
};

export default Input;
