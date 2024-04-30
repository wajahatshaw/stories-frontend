import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
  },
  changePassword: {
    paddingBottom: 30,
    fontSize: 21,
    fontFamily: "BaiJamjureeRegular",
    color: Colors.primary.main,
  },
  saveBtn: {
    // borderWidth: 1,
    paddingHorizontal: 35,
    paddingVertical: 10.25,
    borderRadius: 50,
    backgroundColor: Colors.primary.main,
  },
  saveColorText: {
    color: Colors.primary.white,
  },
});
