import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainWrapper: {
    width: width,
    height: width,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    alignSelf: "center",
    width: "90%",
    height: "90%",
    borderRadius: 15,
  },
  songText: {
    marginTop: 2,
    height: 70,
  },
  songContent: {
    textAlign: "center",
    color: "#EEEEEE",
  },
  songTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  songArtist: {
    fontSize: 16,
    fontWeight: "300",
  },
  progressBar: {
    alignSelf: "stretch",
    marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
  },
  progressLevelDuraiton: {
    width: width,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressLabelText: {
    color: Colors.primary.black,
  },
  musicControlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    width: "60%",
  },
});
