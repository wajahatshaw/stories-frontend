import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const HomeScreenStyles = StyleSheet.create({
    root: {
      flex: 1,
      margin: 3,
    },
    HeaderContainer: {
      flex:.16,
    },
    SecondContainer: {
      flex:.92,
      borderRadius:33,
      overflow:'hidden'
    },

    UpcomingStoriesV:{
      marginTop:15,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:12,
    },
    UpcomingStoriesText:{
    fontFamily:'BaiJamjuree',
    color: Colors.primary.black,
    fontSize:15,
    margin:3,
    },

    TimerView:{
      paddingHorizontal:2,
      borderWidth:1,
      borderRadius:6,
      margin:5
    }
    ,
    UpcomingStoriesIcon:{
      position: 'absolute',
      top: -12,
      right:0,
    },
    StoriesContainer:{
     marginHorizontal:50,
    //  borderWidth:1,
    //  borderColor:'grey',
     alignItems:'center'

    },
    StoryDetailV:{
      marginTop:15,
      fontSize:35,
      fontFamily: 'BaiJamjureeRegular',
    },
    NewStoryMsg:{
      fontFamily:'WonderWorldPersonal',
      color: Colors.primary.main,
      textAlign: 'center',
      fontSize:18,
      marginVertical:12,
      marginBottom:22,
    },
    StoryName:{
     paddingHorizontal:40,
     fontSize:33,
     fontFamily: 'BaiJamjuree',
     color: Colors.primary.black,
     textAlign: 'center'
    },
    StoryPublishT:{
      fontFamily: 'BaiJamjuree',
      fontWeight: '700',
      marginTop:10,
      paddingHorizontal:1,
      textAlign: 'center',
      fontSize:14,
      paddingVertical:2,

    },
    ReadBtn:{
      marginTop:25,
    },

    newStoryBtn:{
      paddingVertical:13,
      borderRadius:23,
      fontSize:19,
      paddingHorizontal:12,
    },
    playButtonView:{
      marginTop:40,
    },
    saveText:{
      color: 'white',
      backgroundColor:Colors.primary.main,
      paddingVertical:3,
      borderRadius:10,
      fontSize:13,
      paddingHorizontal:0,
      overflow:'hidden',
      marginHorizontal:17,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 72,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 2,
      borderWidth: 1,
      bottom: 100
    },
    textStyle: {
      textAlign: "center",
      color:Colors.primary.main,
      fontSize: 15,
      top:6
    },
    modalText: {
      marginBottom: 8,
      textAlign: "center",
      fontSize:26,
      fontFamily: 'BaiJamjureeRegular',
    },
    savedStoryButton:{
      color: Colors.primary.white,
      backgroundColor:Colors.primary.main,
      paddingVertical:7,
      borderRadius:18,
      fontSize:15,
      paddingHorizontal:14,
      overflow:'hidden',
      borderWidth:1,
      borderColor: Colors.primary.black,
      marginBottom: 10
    }
  });