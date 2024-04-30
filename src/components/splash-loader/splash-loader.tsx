import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Colors from '../../constants/color';

const SplashLoader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/data/FSwelcome.mp4.lottie.json')}
        autoPlay
        style={styles.animation}
        resizeMode='cover'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.primary.softViolet, 
    ...StyleSheet.absoluteFillObject,
  },
  animation: { 
    ...StyleSheet.absoluteFillObject,
  },
});

export default SplashLoader;
