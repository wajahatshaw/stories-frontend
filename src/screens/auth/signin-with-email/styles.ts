import { StyleSheet } from "react-native";
import Colors from "../../../constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 60,
    fontFamily: "WonderWorldPersonal",
    marginTop: 20,
    marginBottom: 80,
    alignSelf: "center",
    marginHorizontal: 20,
    textAlign: "center",
    color: Colors.primary.white,
    textShadowColor: Colors.primary.paleMagenta,
    textShadowOffset: { width: 6, height: 6 },
    textShadowRadius: 7,
  },
  textInputView: {
    alignContent: "center",
    marginHorizontal: 60,
    marginVertical: 10,
  },
  holderView: {
    flexDirection: "row",
  },
  holderText: {
    color: Colors.primary.black,
    fontSize: 13,
    lineHeight: 16.25,
    fontFamily: "BaiJamjureeRegular",
    marginBottom: 6,
  },
  forgotText: {
    fontSize: 21,
    fontFamily: "BaiJamjureeRegular",
    color: Colors.primary.vividViolet,
    marginTop: 20,
    textAlign: "center",
  },
  enterButton: {
    backgroundColor: Colors.primary.softViolet,
    paddingVertical: 10,
    marginHorizontal: 120,
    alignItems: "center",
    borderRadius: 40,
    marginTop: 50,
  },
  enterText: {
    fontSize: 21,
    color: Colors.primary.white,
  },
  inputField: {
    borderWidth: 1,
    borderColor: Colors.primary.black,
    borderRadius: 30,
    paddingVertical: 18,
    backgroundColor: Colors.primary.white,
    paddingLeft: 15,
  },
  passwordInputView: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "space-between",
    borderColor: Colors.primary.black,
    borderRadius: 30,
    backgroundColor: Colors.primary.white,
  },
  eyeIcon: {
    padding: 10,
    right: 20,
  },
  errorText: {
    color: Colors.primary.lightRed,
    alignSelf: "center",
    marginLeft: 50,
    fontSize: 13,
  },
});

export default styles;
