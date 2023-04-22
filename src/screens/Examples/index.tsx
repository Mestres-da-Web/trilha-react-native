import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Modal,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "./styles";

const Examples = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView>
      <Text>Exemplos</Text>
      <View style={styles.red} />
      <View style={styles.blue} />
      <View style={styles.yellow} />
      <View style={styles.red} />
      <View style={styles.blue} />
      <View style={styles.yellow} />
      <Button title="Exibir modal" onPress={handleShowModal} />

      <Modal
        visible={isModalVisible}
        transparent
        onRequestClose={handleCloseModal}
        animationType="slide"
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Button title="Fechar" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Examples;
