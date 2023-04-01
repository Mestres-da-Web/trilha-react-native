import { Text } from "react-native";

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return <Text>{text}</Text>;
}

export default Title;
