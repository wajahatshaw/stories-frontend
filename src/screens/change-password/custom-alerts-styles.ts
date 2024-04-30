import { StyleSheet } from "react-native";

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
    padding: 20,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
  },
  messageText: {
    fontSize: 21,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "BaiJamjureeRegular",
  },
  //   okButton: {
  //     borderRadius: 10,
  //     paddingVertical: 10,
  //     paddingHorizontal: 20,
  //   },
  okButtonText: {
    color: "#5C23F9",
    fontFamily: "BaiJamjureeRegular",
    fontSize: 13,
  },
  success: {
    color: "#5C23F9",
  },
});
