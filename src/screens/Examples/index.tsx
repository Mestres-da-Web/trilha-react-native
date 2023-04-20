import { useState } from "react";
import { Button, RefreshControl, ScrollView, Text, View } from "react-native";
import Input from "../../components/Input";
import styles from "./styles";

const Examples = () => {
  const [refreshing, setRefresing] = useState(false);

  const handleRefresh = () => {
    setRefresing(true);
    // Requisitar novos dados
    // Atualizar lista
    setTimeout(() => {
      setRefresing(false);
    }, 2000);
  };

  return (
    <View>
      <ScrollView
        horizontal={false}
        /* onScroll={(e) => {
          console.log(e.nativeEvent);
        }} */
        pagingEnabled={false}
        scrollEnabled={true}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={true}
        contentOffset={{ x: 0, y: 0 }}
        /* snapToOffsets={[300, 800]} */
        keyboardDismissMode={"on-drag"}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <Text>Exemplos</Text>

        <Input label="Nome" placeholder="Digite o seu nome" />
        <Button title="Teste" />
        <View style={styles.red} />
        <View style={styles.blue} />
        <View style={styles.yellow} />
        <View style={styles.red} />
        <View style={styles.blue} />
        <View style={styles.yellow} />
      </ScrollView>
    </View>
  );
};

export default Examples;
