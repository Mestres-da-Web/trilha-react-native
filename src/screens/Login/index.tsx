import { View, Text } from "react-native";
import Input from "../../components/Input";
import Title from "../../components/Title";
import styles from "./styles";

const Login = () => {
  return (
    <View style={styles.container}>
      <Title text={"Olá! \nFaça o login para continuar"} />
      <Input label="Email" placeholder="Insira seu email" />
      <Input label="Senha" placeholder="Insira sua senha" />
    </View>
  );
};

export default Login;
