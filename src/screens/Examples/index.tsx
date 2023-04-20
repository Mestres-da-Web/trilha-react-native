import { useState } from "react";
import { Switch, Text, View } from "react-native";
import styles from "./styles";

const Examples = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <View>
      <Text>Exemplos</Text>
      <Switch
        value={isActive}
        onValueChange={toggleSwitch}
        trackColor={{ true: "#767577", false: "#420066" }}
        thumbColor={
          isActive
            ? styles.switchTrackActive.color
            : styles.switchTrackInactive.color
        }
      />
    </View>
  );
};

export default Examples;
