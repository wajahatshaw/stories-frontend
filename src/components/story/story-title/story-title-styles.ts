import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  number: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 16.25,
    marginHorizontal: 9,
    marginTop: 16,
    fontFamily: "BaiJamjuree",
  },
  title: {
    marginLeft: 23,
    fontSize: 21,
    fontWeight: "400",
  },
  detail: {
    flexDirection: "row",
  },
  read: {
    marginLeft: 30,
    borderRadius: 50,
    alignSelf:'center',
    textAlign: "center",
    margin: 5,
    padding: 5,
    backgroundColor: "#5C23F9",
  },
  readText: {
    color:'white',
    fontSize: 13,
    // fontWeight: "400",
    textAlign: "center",
    color: "#fff",
    fontFamily: "BaiJamjuree",
  },
  category: {
    marginLeft: 13,
    alignSelf:'center',
    borderRadius: 50,
    margin: 5,
    padding: 5,
    backgroundColor: "#2375F9",
  },
  genre: {
    marginLeft: 13,
    width: 76,
    borderRadius: 50,
    margin: 5,
    padding: 5,
    backgroundColor: "#C623F9",
    textAlign: "center",
  },
});
