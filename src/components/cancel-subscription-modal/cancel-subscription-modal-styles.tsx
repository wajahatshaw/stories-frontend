import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(151, 151, 151, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: "80%",
    flexDirection: "column",
    borderWidth: 1,
  },
  firstContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 30,
    alignItems: "center",
  },

  close: {
    fontSize: 21,
    color: Colors.primary.main,
  },
  touchableContainer: {
    alignItems: "center",
  },
  cancel: {
    fontSize: 21,
    fontFamily: "BaiJamjureeRegular",
  },
  firstOption: {
    fontSize: 13,
    padding: 3,
    paddingBottom: 20,

    fontFamily: "BaiJamjureeRegular",
  },
  secondOption: {
    fontSize: 21,
    color: Colors.primary.main,
    paddingBottom: 20,
  },
  thirdOption: {
    fontSize: 21,
    color: Colors.primary.main,
  },
  fourthOption: {
    paddingTop: 20,
    fontSize: 21,
    paddingBottom: 20,

    color: Colors.primary.main,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 20.5,
    fontSize: 13,
    padding: 10,
    textAlignVertical: "top",
  },
  cancelSubBtn: {
    width: "80%",
    backgroundColor: Colors.primary.main,
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
  },
  cancelBtnText: {
    color: Colors.primary.white,
    textAlign: "center",
    fontFamily: "BaiJamjureeRegular",
  },
  discard: {},
  discardText: {
    fontSize: 21,
    color: Colors.primary.main,
    fontFamily: "BaiJamjureeRegular",
    paddingVertical: 10,
  },
});
