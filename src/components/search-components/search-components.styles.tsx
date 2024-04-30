import { StyleSheet } from "react-native";
import Colors from "../../constants/color";
export const SearchBarStyles = StyleSheet.create({
  background: {
    height: "100%",
    opacity: 0.75,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backContainer: {
    flex: 0.1,
    marginHorizontal: 15,
  },
  searchContainer: {
    flex: 0.9,
    alignItems: "flex-start",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary.main,
    borderRadius: 50,
    marginTop: 10,
  },
  inputContainer: {
    padding: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 301,
  },
  image: {
    width: 21,
    height: 21,
    marginRight: 5,
    tintColor: Colors.primary.main,
    paddingTop: 6,
  },
  textInput: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.primary.main,
    fontFamily: "BaiJamjuree",
  },
  backButton: {
    top: 5,
  },
});
