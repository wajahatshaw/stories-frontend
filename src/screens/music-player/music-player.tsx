import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import MusicPlayerComponent from '../../components/music-player-component/music-player-component'

const MusicPlayer = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <MusicPlayerComponent/>
    </SafeAreaView>
  )
}
export default MusicPlayer