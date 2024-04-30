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
    marginBottom: 20,
    alignSelf: "center",
    marginHorizontal: 20,
    textAlign: "center",
    color: Colors.primary.white,
    textShadowColor: Colors.primary.paleMagenta,
    textShadowOffset: { width: 6, height: 6 },
    textShadowRadius: 7,
  },
  buttonContainer: {
    flex: 0.8,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 60,
    marginVertical: 30,
  },
  fbbutton: {
    backgroundColor: "#315A9D",
  },
  googlebutton: { backgroundColor: "#1F87FC" },
  applebutton: {
    backgroundColor: "#ffffff",
    color: "#000",
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    fontFamily: "BaiJamjureeRegular",
  },
});

export default styles;
