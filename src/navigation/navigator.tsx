import React from "react";
import StoryMain from "../screens/story-main/story-main";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/color";
import SocialLoginScreen from "../screens/auth/social-login/social-login-screen";
import SubscribeScreen from "../screens/subscribe-screen/subscribe-screen";
// import BeginnerSheet from "../components/bottom-sheet-modal/bottom-sheet-modal";
import ShareScreen from "../components/share-component/react-native-share";
import SavedStoriesScreen from "../screens/saved-stories-screen/saved-stories";
import MusicPlayer from "../screens/music-player/music-player";

const imageIcon = require("../assets/icons/imageIcon.png");
const save = require("../assets/icons/save.png");
const audioIcon = require("../assets/icons/earphones.png");
const notesIcon = require("../assets/icons/notesIcon.png");
const shareIcon = require("../assets/icons/shareIcon.png");

const Navigator = () => {
  // const BeginnerSheetRef = useRef();
  // const handleBeginnerPress = () => BeginnerSheetRef.current.present(0);
  const Tab = createBottomTabNavigator();
  const Save = () => {
    return (
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <Text style={{ textAlign: "center" }}>Save Components</Text>
      </View>
    );
  };
  const Audio = () => {
    return (
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <Text style={{ textAlign: "center" }}>Audio Components</Text>
      </View>
    );
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName={"Story"}
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: Colors.primary.main,
          tabBarActiveBackgroundColor: Colors.primary.main,
          tabBarLabelStyle: {
            fontFamily: "BaiJamjuree",
            fontSize: 13,
          },
          tabBarItemStyle: {
            height:55,
            borderRadius: 28,
            paddingVertical:5
          },
          tabBarStyle: {
            height: 55,
            borderTopColor:Colors.primary.vividViolet,
            borderBlockColor: Colors.primary.vividViolet,
            margin: '1.5%',
            borderColor: Colors.primary.vividViolet,
            borderWidth: 1,
            borderRadius: 28,
            position: 'absolute',
          },
          tabBarHideOnKeyboard:true,
          
        }}
      >
        <Tab.Screen
          name="Photos"
          component={StoryMain}
          options={{
            
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={imageIcon}
                style={{ tintColor: color, width: 21, height: 21 }}
              />
            ),
            //   tabBarButton: (props) => (
            //   <TouchableOpacity
            //     {...props}
            //     onPress={handleBeginnerPress}
            //   />
            // ),
          }}
        />
        <Tab.Screen
          name="Save"
          component={SavedStoriesScreen}
          options={{
            headerShown: false,
            title: "Save",
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={save}
                style={{ tintColor: color, width: 16, height: 21}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Audio"
          component={MusicPlayer}
          options={{
            headerShown: false,
            title: "Audio",
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={audioIcon}
                style={{ tintColor: color, width: 32, height: 27 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notes"
          component={SocialLoginScreen}
          options={{
            headerShown: false,
            title: "Notes",
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={notesIcon}
                style={{ tintColor: color, width: 21, height: 21 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Share"
          // component={SubscribeScreen}
          component={ShareScreen}
          options={{
            headerShown: false,
            title: "Share",
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={shareIcon}
                style={{ tintColor: color, width: 16, height: 21 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <BeginnerSheet
       bottomSheetRef={BeginnerSheetRef}
/> */}
    </>
  );
};
export default Navigator;
