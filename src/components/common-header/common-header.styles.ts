import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const CommonHeaderStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
  },
  icon: {
    height: 35,
    width: 35,
  },
  subsBtn: {
    paddingHorizontal: 8,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: Colors.primary.main,
  },
  subsBtnText: {
    color: Colors.primary.white,
  },
});
