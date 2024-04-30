import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const Styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    marginTop: 20,
  },
  subscribe: {
    textAlign: "center",
    fontFamily: "BaiJamjureeBold",
    fontSize: 28,
    color: Colors.primary.main,
    marginVertical: 15,
  },
  sub: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 20,
  },
  orderView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary.main,
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  orderSummaryText: {
    fontFamily: "BaiJamjureeBold",
    fontSize: 20,
    color: Colors.primary.main,
    marginVertical: 15,
  },
  basicView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  basicText: {
    fontFamily: "BaiJamjureeRegular",
    fontSize: 18,
    color: Colors.primary.main,
    marginVertical: 8,
  },
  totalView: {
    fontFamily: "BaiJamjureeRegular",
    fontSize: 19,
    color: Colors.primary.main,
    marginVertical: 8,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontFamily: "BaiJamjureeBold",
    fontSize: 23,
    color: Colors.primary.main,
    marginVertical: 8,
  },
  totalPriceText: {
    fontFamily: "BaiJamjureeBold",
    fontSize: 19,
    color: Colors.primary.main,
    marginVertical: 8,
  },
  back: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  backText: {
    color: Colors.primary.main,
    fontSize: 13,
    fontFamily: "BaiJamjureeRegular",
  },
  chooseSubText: {
    fontFamily: "BaiJamjureeRegular",
    fontSize: 13,
  },
  Plan: {
    marginHorizontal: 50,
    marginTop: 50,
  },

  choosePlan: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.primary.main,
  },
  weeklyView: {
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderRadius: 50,
  },
  weeklyText: {
    color: Colors.primary.white,
    fontSize: 21,
    fontFamily: "BaiJamjureeRegular",
  },
  yearly: {
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 13,
  },
  yearlyText: {
    fontSize: 21,
    fontFamily: "BaiJamjureeRegular",
    color: Colors.primary.main,
  },
  percent: {
    position: "absolute",
    top: -20,
    right: -40,
    borderWidth: 1.2,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 50,
    backgroundColor: "#ACFF7D",
  },
  percentText: {
    fontSize: 13,
    fontFamily: "BaiJamjureeRegular",
    color: Colors.primary.main,
  },
  free: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 13,
    fontFamily: "BaiJamjureeRegular",
    color: Colors.primary.main,
  },
  discount: {
    marginHorizontal: 55,
  },
  discountText: {
    marginTop: 20,
    fontSize: 13,
    fontFamily: "BaiJamjureeRegular",
  },
  TextInput: {
    paddingVertical: 13,
    paddingHorizontal: 69,
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 21,
    borderColor: Colors.primary.main,
    fontFamily: "BaiJamjureeRegular",
    backgroundColor: Colors.primary.white,
  },
  discountButton: {
    marginHorizontal: 40,
    marginVertical: 15,
    padding: 10,
    borderWidth: 1,
    fontSize: 13,
    borderRadius: 50,
    borderColor: Colors.primary.black,
    backgroundColor: Colors.primary.main,
  },
  discountButtonText: {
    color: Colors.primary.white,
    fontFamily: "BaiJamjureeRegular",
    textAlign: "center",
  },
  pay: {
    marginTop: 45,
    borderWidth: 1,
    marginHorizontal: 23,
    padding: 20,
    borderRadius: 30,
    backgroundColor: Colors.primary.main,
  },
  paymentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: -10,
  },
  payText: {
    textAlign: "center",
    fontSize: 21,
    fontFamily: "BaiJamjureeRegular",
    color: Colors.primary.white,
    marginLeft: 10,
  },
});
