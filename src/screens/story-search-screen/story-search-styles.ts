import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/color";
const { width, height } = Dimensions.get("window");
const circleWidth = 95; 
const circleHeight = 22;

export const StorySearchStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bookContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  bookCircle: {
    width: width * (circleWidth / 100),
    height: height * (circleHeight / 100),
    borderRadius: width * (circleWidth / 100) / 2,
    borderWidth: 1,
    borderColor: Colors.primary.main,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical:'5%'
  },
  bookTitle: {
    fontSize: 36,
    marginBottom: 20,
    marginHorizontal: 50,
    textAlign: 'center'
  },
  bookWritten:{
    fontSize: 14,
    marginBottom: 20,
    marginHorizontal: 40,
    textAlign: 'center'
  }
});
