import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import TrackPlayer, {
  Capability,
  State,
  Event,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign  from '@expo/vector-icons/AntDesign'
import { styles } from './styles';
import Colors from '../../constants/color';

interface Track {
  id: string;
  url: string;
  title: string;
  artist: string;
  artwork: string;
}

const MusicPlayerComponent = () => {
  const [trackIndex, setTrackIndex] = useState<string | null>(null);
  const [trackTitle, setTrackTitle] = useState<string>('');
  const [trackArtist, setTrackArtist] = useState<string>('');
  const [trackArtwork, setTrackArtwork] = useState<string>('');
  const playBackState = usePlaybackState() || { state: State.None };
  console.log("playBackState:", playBackState);
  const progress = useProgress();

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
      });
      // Add tracks here
      // const track = {
      //   id: '1',
      //   url: require('../../assets/data/abdul-rahman-al-sudais.mp3'),
      //   title: 'Surah Ar-Rahman',
      //   artist: 'Track',
      //   artwork: require('../../assets/images/modalImage.png'),
      // };
      // setTrackIndex(track.id);
      // setTrackTitle(track.title);
      // setTrackArtist(track.artist);
      // setTrackArtwork(track.artwork);
      await TrackPlayer.add({
        id: '1',
        url: require('../../assets/data/iphone.mp3'),
        title: 'Ringtone',
        artist: 'Track',
        artwork: require('../../assets/images/modalImage.png'),
      });
      await gettrackdata();
      await TrackPlayer.play();
    } catch (error) {
      console.log(error);
    }
  };

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artwork, artist } = track as Track;
      setTrackIndex(event.nextTrack.toString());
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const gettrackdata = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack) {
      const track = await TrackPlayer.getTrack(currentTrack);
      const { title, artwork, artist } = track as Track;
      setTrackIndex(currentTrack.toString());
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  };

  const togglePlayBack = async () => {
    try {
      const playerState = await TrackPlayer.getState();
      if (playerState === State.Paused || playerState === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    } catch (error) {
      console.error('Error toggling playback:', error);
    }
  };

  const nexttrack = async () => {
    if (trackIndex) {
      await TrackPlayer.skipToNext();
      await gettrackdata();
    }
  };

  const previoustrack = async () => {
    if (trackIndex) {
      await TrackPlayer.skipToPrevious();
      await gettrackdata();
    }
  };

  useEffect(() => {
    setupPlayer();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.mainWrapper}>
          <Image source={{ uri: trackArtwork }} style={styles.imageWrapper} />
        </View>
        <View style={styles.songText}>
          <Text style={[styles.songContent, styles.songTitle]} numberOfLines={3}>
            {trackTitle}
          </Text>
          <Text style={[styles.songContent, styles.songArtist]} numberOfLines={2}>
            {trackArtist}
          </Text>
        </View>
        <View>
          <Slider
            style={styles.progressBar}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor={Colors.primary.main}
            minimumTrackTintColor={Colors.primary.main}
            maximumTrackTintColor={Colors.primary.white}
            onSlidingComplete={async (value) => await TrackPlayer.seekTo(value)}
          />
          <View style={styles.progressLevelDuraiton}>
            <Text style={styles.progressLabelText}>
              {new Date(progress.position * 1000).toLocaleTimeString().substring(3)}
            </Text>
            <Text style={styles.progressLabelText}>
              {new Date((progress.duration - progress.position) * 1000)
                .toLocaleTimeString()
                .substring(3)}
            </Text>
          </View>
        </View>
        <View style={styles.musicControlsContainer}>
          <TouchableOpacity onPress={previoustrack}>
            <AntDesign name="banckward" size={35} color={Colors.primary.main} />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayBack}>
            <AntDesign
              name={
                playBackState.state === 'playing'
                  ? 'pausecircle'
                  : playBackState.state === 'paused'
                  ? 'caretright'
                  : 'pausecircle'
              }
              size={55}
              color={Colors.primary.main}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={nexttrack}>
            <AntDesign name="forward" size={35} color={Colors.primary.main} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MusicPlayerComponent;