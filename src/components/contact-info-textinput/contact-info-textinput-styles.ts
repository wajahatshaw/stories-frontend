import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const styles = StyleSheet.create({
  textInputContainer: {
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  textInput: {
    paddingHorizontal: 13,
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 50,
    margin: 2,
    borderColor: Colors.primary.main,
  },
  nameFieldText: {
    fontFamily: "BaiJamjureeRegular",
    fontSize: 13,
  },
  input: {
    color: Colors.primary.main,
    textAlign: "center",
    fontSize: 21,
    fontFamily: "BaiJamjureeRegular",
  },
});
