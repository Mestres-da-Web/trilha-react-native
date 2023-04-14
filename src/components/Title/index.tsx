import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../App";
import styles from "./styles";

interface TitleProps {
  text: string;
  onPress?: () => void;
}

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

function Title({ text, onPress }: TitleProps) {
  const navigation = useNavigation<Props["navigation"]>();
  const route = useRoute<Props["route"]>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Products");
      }}
    >
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Title;
