import { StyleSheet } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import Colors from "../../constants/color";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 1,
  },
  image: {
    height: "100%",
  },

  thank: {
    fontSize: 55,
    fontFamily: "WonderWorldPersonal",
    color: Colors.primary.white,
    borderColor: Colors.primary.main,
  },
});
