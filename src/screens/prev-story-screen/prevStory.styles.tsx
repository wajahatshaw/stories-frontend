import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }, 
  container: {
      opacity: 0.75,
      flex:1
    },
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
