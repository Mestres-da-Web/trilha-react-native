import { Text } from "react-native";

interface TitleProps {
  text: string;
  onPress: () => void;
}

function Title({ text, onPress }: TitleProps) {
  return <Text>{text}</Text>;
}

export default Title;
