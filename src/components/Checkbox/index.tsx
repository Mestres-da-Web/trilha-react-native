import Checkbox from "expo-checkbox";
import { Text, View } from "react-native";
import styles from "./styles";

interface CheckboxWithLabelProps {
  label: string;
}

function CheckboxWithLabel({ label }: CheckboxWithLabelProps) {
  return (
    <View style={styles.container}>
      <Checkbox color={styles.checkbox.color} value={true} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default CheckboxWithLabel;
