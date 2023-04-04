import { Text } from "react-native";
import styles from "./styles";

interface TitleProps {
  text: string;
  onPress?: () => void;
}

function Title({ text, onPress }: TitleProps) {
  return <Text style={styles.title}>{text}</Text>;
}

export default Title;
