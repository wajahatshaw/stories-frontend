import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const SavedStoriesScreenStyles = StyleSheet.create({
    topView: {
        marginTop: 20,
        marginHorizontal: '3%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: Colors.primary.black,
        fontSize: 21,
        textAlign: 'center',
        flex: 0.8,
        fontFamily: 'BaiJamjureeRegular'
    },
    backicon: {
        height: 21,
        width: 21,
    },
    backText: {
        fontFamily: 'BaiJamjuree-Regular',
        fontSize: 13,
        color: Colors.primary.vividViolet,
        paddingLeft: '1%'
    },
    backView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        height: 41,
        width: "70%",
        borderWidth: 1,
        borderRadius: 21,
        borderColor:Colors.primary.vividViolet,
        paddingHorizontal: '3%',
        paddingVertical: '1%',
        elevation:1,
    },
    searchButtonText: {
        fontFamily: 'BaiJamjureeRegular',
        color: 'grey',
        fontSize: 21,
        justifyContent: 'center',
        textAlign: 'left'
    },
    listContainer: {
        marginVertical: 30,
        justifyContent:'space-between',
        marginHorizontal: "5%",
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#A4A4A4",
        flex: 1,
        paddingBottom: 15,
    },
    listTitle: {
        width:'50%',
        color: Colors.primary.black,
        fontSize:21,
        fontFamily: 'BaiJamjureeRegular',
    },
    listDate: {
        color: Colors.primary.black,
        fontSize: 21,
        fontFamily: 'BaiJamjureeRegular',
    },
    listIcon: {
        height: 34, width: 34
    },
   
});