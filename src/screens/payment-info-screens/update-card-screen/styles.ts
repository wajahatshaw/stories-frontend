import { StyleSheet } from "react-native";
import Colors from "../../../constants/color";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    marginLeft: 15,
  },
  backTouchable: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    height: 23,
    width: 23,
  },
  backText: {
    marginLeft: 5,
    color: Colors.primary.main,
    fontSize: 13,
    fontFamily: "BaiJamjureeRegular",
  },
  manageText: {
    fontSize: 13,
    fontFamily: "BaiJamjureeRegular",
    color: Colors.primary.black,
    marginHorizontal: 50,
    top: 2,
    fontWeight: "bold",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary.main,
    borderRadius: 32,
    alignSelf: "center",
    padding: 20,
    marginTop: 40,
    borderWidth: 1,
    width: "85%",
  },
  optionText: {
    fontSize: 21,
    marginLeft: 10,
    color: Colors.primary.white,
  },
});
