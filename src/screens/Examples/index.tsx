import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface DataProps {
  id: number;
  name: string;
  price: number;
  brand: string;
  quantity: number;
}

const data: DataProps[] = [
  { id: 1, name: "Teclado", price: 1234, brand: "Keychron", quantity: 332 },
  { id: 2, name: "Mouse", price: 322, brand: "Logitech", quantity: 22 },
  { id: 3, name: "Webcam", price: 554, brand: "Logitech", quantity: 32 },
  { id: 4, name: "Monitor", price: 1222, brand: "LG", quantity: 94 },
  { id: 5, name: "Notebook", price: 3345, brand: "Lenovo", quantity: 56 },
];

const Examples = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={[styles.container, { margin: 10 }]}>
              <>
                <Text style={styles.text}>Nome: {item.name}</Text>
                <Text style={styles.text}>Marca: {item.brand}</Text>
                <Text style={styles.text}>Valor: R$ {item.price}</Text>
                <Text style={styles.text}>
                  Quantidade: {item.quantity} unidades
                </Text>
                {/* <View style={styles.imageContainer} /> */}
              </>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        ListFooterComponent={
          <View>
            <Text>Rodapé da lista</Text>
          </View>
        }
        ListFooterComponentStyle={styles.footer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text>Lista vazia</Text>
          </View>
        }
        horizontal={false}
        numColumns={2}
        onEndReached={() => {
          console.log("End reached");
        }}
        onEndReachedThreshold={0.5}
        onRefresh={() => {}}
        refreshing={false}
      />
    </View>
  );
};

export default Examples;
