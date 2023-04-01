import { View, Text } from "react-native";
import Input from "../../components/Input";

const Login = () => {
  return (
    <View>
      <Text>Olá Login</Text>
      <Input label="Email" />
      <Input label="Senha" />
    </View>
  );
};

export default Login;
