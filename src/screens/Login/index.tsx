import { Button, Text, View } from "react-native";
import CheckboxWithLabel from "../../components/Checkbox";
import Input from "../../components/Input";
import Title from "../../components/Title";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>
      <Title text={"Olá! \nFaça o login para continuar"} />
      <Input label="Email" placeholder="Insira seu email" />
      <Input label="Senha" placeholder="Insira sua senha" />
      <CheckboxWithLabel label="Lembre-me" />
      <Button
        title="Produtos"
        onPress={() => {
          navigation.navigate("Products");
        }}
      />
    </View>
  );
};

export default Login;
