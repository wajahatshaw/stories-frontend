import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

export const CommonButtonStyle = StyleSheet.create({
   
    subsBtn:{
     justifyContent:'center',
     marginVertical:5,
    },
    subsBtnText:{
     color: Colors.primary.main,
     fontSize:19,
     fontFamily: 'BaiJamjureeRegular',
     fontWeight: '700',
     borderWidth:1,
     borderColor: Colors.primary.main,
     borderRadius: 25,
     textAlign: 'center',
    }
  });