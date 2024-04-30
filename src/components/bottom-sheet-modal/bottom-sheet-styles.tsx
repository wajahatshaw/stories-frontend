import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const sheetStyles = StyleSheet.create({
    imageView: {
        height: 36, 
        width: '15%', 
        backgroundColor: 'white', 
        position: 'absolute', 
        borderRadius: 32, top: 10, right: 10
    },
    image: {
        height: '100%',
        width: "100%",
        position: 'relative',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    slide: {
        flex: 1,
        justifyContent: "flex-end",
    },
    indicatorStyle: {
        opacity: 0,
        borderCurve: 'circular'
    },
    bottomSheetStyle: {
        borderCurve: 'circular',
        position: "absolute",

    },
    text: {
        fontFamily: 'BaiJamjureeRegular',
        fontSize: 21,
        color: Colors.primary.vividViolet,
        textAlign: 'center',
       paddingVertical:'6%'
    },
});