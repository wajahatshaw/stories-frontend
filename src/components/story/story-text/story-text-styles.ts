import { StyleSheet } from "react-native";
import Colors from "../../../constants/color";

export const styles = StyleSheet.create({
  storyText: {
    marginVertical: 5,
    marginHorizontal: 15,
    fontSize: 21,
    flexWrap: "wrap",
    fontWeight: "400",
    lineHeight: 26.25,
    fontFamily: "BaiJamjureeRegular",
    textAlign:'justify'
  },
  nextBtn: {
    paddingHorizontal: 15,
    paddingVertical: 14.5,
    backgroundColor: Colors.primary.main,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 93,
    marginVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
  },
  btnText: {
    color: Colors.primary.white,
    fontWeight: "400",
    fontSize: 21,
    // borderWidth: 1,
    margin: 5,
  },
  icon: {
    tintColor: Colors.primary.white,
    height: 35,
    width: 35,
  },
});
