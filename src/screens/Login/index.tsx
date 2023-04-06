import { View } from "react-native";
import Input from "../../components/Input";
import Title from "../../components/Title";
import styles from "./styles";
import CheckboxWithLabel from "../../components/Checkbox";
import UseStateExample from "../../components/Examples/useState";

const Login = () => {
  return (
    <View style={styles.container}>
      <UseStateExample />
      <Title text={"Olá! \nFaça o login para continuar"} />
      <Input label="Email" placeholder="Insira seu email" />
      <Input label="Senha" placeholder="Insira sua senha" />
      <CheckboxWithLabel label="Lembre-me" />
    </View>
  );
};

export default Login;
