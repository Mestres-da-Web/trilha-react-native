import { useEffect } from "react";
import {
  AppState,
  Button,
  Dimensions,
  Keyboard,
  Linking,
  PixelRatio,
  Platform,
  Text,
  View,
} from "react-native";
import Input from "../../components/Input";

const Examples = () => {
  const os = Platform.OS;
  const dimensions = Dimensions.get("screen");
  const pixelRatio = PixelRatio.getFontScale();

  useEffect(() => {
    const subcription = AppState.addEventListener("change", (status) => {
      console.log("Mudança no estado do app detectada", status);
    });
    return () => {
      subcription.remove();
    };
  }, []);

  return (
    <View>
      <Text>Exemplos</Text>
      <Input label="Nome" placeholder="Digite o seu nome" />
      <Button
        title="Remover teclado"
        onPress={() => {
          Keyboard.dismiss();
        }}
      />
      <Button
        title="URL"
        onPress={() => {
          Linking.openURL(
            "https://reactnative.dev/docs/appstate#focus-android",
          );
        }}
      />
    </View>
  );
};

export default Examples;
