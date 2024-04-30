import { StyleSheet } from "react-native";
import Colors from "../../../constants/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  headingText: {
    fontSize: 21,
    fontFamily: "BaiJamjureeRegular",
    marginTop: 20,
    alignSelf: "center",
    marginHorizontal: 50,
    textAlign: "center",
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
    fontFamily: "BaiJamjureeLight",
    marginBottom: 6,
  },
  inputField: {
    borderWidth: 1,
    borderColor: Colors.primary.black,
    borderRadius: 30,
    paddingVertical: 18,
    backgroundColor: Colors.primary.white,
    paddingLeft: 15,
  },
  errorText: {
    color: Colors.primary.lightRed,
    alignSelf: "center",
    textAlign:'center',
    fontSize: 13,
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
});
