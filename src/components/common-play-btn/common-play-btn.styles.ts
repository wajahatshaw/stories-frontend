import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const CommonPlayBtnStyles = StyleSheet.create({
   
    buttonView:{
     justifyContent:'space-around',
     alignItems:'center',
     borderWidth:1,
     flexDirection:'row',
     borderRadius: 25,
     borderColor: Colors.primary.main,
     marginVertical:9,
     paddingVertical:7,
     paddingHorizontal:8,
    },
    playBtnFirstText:{
     color: Colors.primary.main,
     fontSize:19,
     fontFamily: 'BaiJamjuree',
     fontWeight: '700',
     borderColor: Colors.primary.main,
     borderRadius: 25,
     textAlign: 'left',

    },
    playBtnSecondText:{
      color: Colors.primary.black,
      fontSize:19,
      fontFamily: 'BaiJamjuree',
      fontWeight: '700',
      borderColor: Colors.primary.main,
      borderRadius: 25,
      textAlign: 'left',

     },
    icons:{
        marginHorizontal:7,
        width:30,
        height:30,
    }
  });