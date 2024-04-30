import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const styles = StyleSheet.create({
  contactInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,

    // borderWidth: 1,
  },
  back: {
    flexDirection: "row",
    gap: 5,
  },
  backImage: {
    width: 21,
    height: 21,
  },
  backText: {
    color: Colors.primary.main,
  },

  contact: {
    flexDirection: "row",
    gap: 80,
    alignItems: "center",
  },
  contactInfoText: {
    fontSize: 21,
  },

  image: {
    width: 52,
    height: 52,
  },
});
