import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  backContainer: {
    flexDirection: "row",
    gap: 5,
  },
  backImage: {
    width: 21,
    height: 21,
  },
  text: {
    fontSize: 13,
    fontFamily: "BaiJamjureeRegular",
  },
  textInputContainer: {
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  textInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 13,
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 50,
    marginVertical: 15,
    margin: 2,
    gap: 50,
    borderColor: Colors.primary.main,
  },

  nameFieldText: {
    fontFamily: "BaiJamjureeRegular",
    fontSize: 13,
  },
  input: {
    color: Colors.primary.main,
    textAlign: "center",
    flex: 1,
    fontSize: 21,
    fontFamily: "BaiJamjureeRegular",
  },
  changePasswordBtn: {
    alignItems: "center",
    backgroundColor: Colors.primary.main,
    borderRadius: 50,
    paddingVertical: 20,
    marginHorizontal: 45,
    borderWidth: 1,
    fontFamily: "BaiJamjureeRegular",
  },
  changePasswordText: {
    color: Colors.primary.white,
    fontFamily: "BaiJamjureeRegular",
  },
});
