import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  red: {
    width: 300,
    height: 300,
    backgroundColor: "red",
  },
  blue: {
    width: 300,
    height: 300,
    backgroundColor: "blue",
  },
  yellow: {
    width: 300,
    height: 300,
    backgroundColor: "yellow",
  },
  modalView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default styles;
