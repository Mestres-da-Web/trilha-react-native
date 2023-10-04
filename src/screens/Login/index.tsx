import { Button, Text, View } from "react-native";
import { useState } from "react";
import CheckboxWithLabel from "../../components/Checkbox";
import Input from "../../components/Input";
import Title from "../../components/Title";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import api from "../../services/api";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

interface LoginFormProps {
  email: string;
  password: string;
}

const Login = ({ navigation, route }: Props) => {
  const [formData, setFormData] = useState<LoginFormProps>(
    {} as LoginFormProps,
  );

  const handleChangeEmail = (text: string) => {
    setFormData({ ...formData, email: text });
  };

  const handleChangePassword = (text: string) => {
    setFormData({ ...formData, password: text });
  };

  const handleSubmit = () => {
    console.log(formData);
    api.login(formData);
  };

  return (
    <View style={styles.container}>
      <Title text={"Olá! \nFaça o login para continuar"} />
      <Input
        label="Email"
        placeholder="Insira seu email"
        onChange={handleChangeEmail}
      />
      <Input
        label="Senha"
        placeholder="Insira sua senha"
        onChange={handleChangePassword}
      />
      <CheckboxWithLabel label="Lembre-me" />
      <Button title="Continuar" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
