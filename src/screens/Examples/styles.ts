import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("screen");

const styles = StyleSheet.create({
  red: {
    width: dimensions.width,
    height: 300,
    backgroundColor: "red",
  },
  blue: {
    width: dimensions.width,
    height: 300,
    backgroundColor: "blue",
  },
  yellow: {
    width: dimensions.width,
    height: 300,
    backgroundColor: "yellow",
  },
});

export const colors = {};

export default styles;
