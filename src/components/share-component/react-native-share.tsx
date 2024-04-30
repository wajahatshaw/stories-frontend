import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useIsFocused, useRoute } from "@react-navigation/native";
import Share from "react-native-share";
import { TouchableOpacity } from "react-native-gesture-handler";
const ShareScreen = () => {

    const route = useRoute();
    console.log("route", route);
    const isFocused = useIsFocused();

    const shareFun = () => {
        console.log("Hello Share screen");
        Share.open({ url: "https://www.instagram.com/" ,title:'hello'})
            .then((res) => {
                console.log("response>>>>>", res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    };
    useEffect(() => {
        if (isFocused && route.name === "Share") {
            shareFun();
        }
    }, [isFocused]);
    return (
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            <TouchableOpacity> 
      <Text style={{ textAlign: "center" }}>Share Components </Text>
      </TouchableOpacity>
        </View>
    );
};
export default ShareScreen;