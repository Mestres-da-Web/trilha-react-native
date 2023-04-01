import { Text, TextInput, View } from "react-native";

interface InputProps {
  label: string;
}

const Input = ({ label }: InputProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        onChangeText={(text) => {
          console.log(text);
        }}
      />
    </View>
  );
};

export default Input;
