import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 17,
    marginVertical: 10,
    backgroundColor: Colors.primary.vividViolet,
    borderRadius: 30,
  },
  btnText: {
    fontSize: 20,
    fontFamily: "BaiJamjureeRegular",
    lineHeight: 24,
    textAlign: "center",
    color: Colors.primary.white,
    marginLeft: 5,
  },
  btnTextyear: {
    fontSize: 20,
    fontFamily: "BaiJamjureeRegular",
    lineHeight: 24,
    textAlign: "center",
    color: Colors.primary.white,
    marginRight: 5,
  },
  radioView: {
    backgroundColor: Colors.primary.lightRed,
    borderRadius: 30,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: Colors.primary.white,
    padding: 20,
    borderRadius: 10,
    width: "80%",
    borderColor: Colors.primary.main,
    elevation: 18,
  },
  modalText: {
    fontSize: 20,
    fontFamily: "BaiJamjureeRegular",
    color: Colors.primary.black,
    marginBottom: 16,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary.main,
  },
  modalButtonText: {
    color: Colors.primary.white,
    fontSize: 20,
    fontFamily: "BaiJamjureeRegular",
  },
});
