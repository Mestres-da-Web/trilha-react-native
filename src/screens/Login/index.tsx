import { View } from "react-native";
import CheckboxWithLabel from "../../components/Checkbox";
import UseEffectExample from "../../components/Examples/useEffect";
import Input from "../../components/Input";
import Title from "../../components/Title";
import styles from "./styles";

const Login = () => {
  return (
    <View style={styles.container}>
      <UseEffectExample />
      {/* <Title text={"Olá! \nFaça o login para continuar"} />
      <Input label="Email" placeholder="Insira seu email" />
      <Input label="Senha" placeholder="Insira sua senha" />
      <CheckboxWithLabel label="Lembre-me" /> */}
    </View>
  );
};

export default Login;
