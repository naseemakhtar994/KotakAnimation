/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import SensorAnimatedImage from './SensorAnimatedImage';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { SharedElement } from 'react-navigation-shared-element';
import DogAnimatedImageDetails from './DogAnimatedImageDetails';
import { BlurView } from '@react-native-community/blur';
import Lottie from 'lottie-react-native';

const { width, height } = Dimensions.get('window');
function Details({ navigation }) {
  const animationRef = useRef()
  const { width, height } = useWindowDimensions();
  const [favICon, setFavIcon] = useState(require('../assets/HeartFilled.png'));
  const onPressHeart = () => {
// Chaging Image of Heart Icon with animation
    if (favICon === require('../assets/HeartOutline.png')) {
      animationRef.current.play();
      setTimeout(() => {
        animationRef.current.reset();
        setFavIcon(require('../assets/HeartFilled.png'))

      }, 100)
    } else {
      setFavIcon(require('../assets/HeartOutline.png'))

    }
  }
  return (
    <LinearGradient colors={['#150E21', '#212121',]} style={styles.mainContainer}>

      <TouchableOpacity
        activeOpacity={1}

        onPress={() => {
          navigation?.goBack();
        }}
      >
        <SharedElement id={`main`}>
          <View>
            <View
              style={styles.sharedView}
            >


              <SensorAnimatedImage
                image={require('../assets/Space.png')}
                order={1}
              />
              <DogAnimatedImageDetails
                image={require('../assets/Dog.png')}
                order={2}
              />

            </View>


            <View>

              <>
                <View style={styles.contentContainer}  >

                  <View style={styles.contentView1}  >

                    <Text
                      style={styles.txt}
                    >Canis infinitum</Text>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={onPressHeart}
                    >
                      <View style={styles.favIconCotainer}>

                      <Lottie
                            style={styles.animationFav}
                            ref={animationRef}
                            source={require('../assets/Heart pop.json')}
                            loop />
                        <Image
                          source={favICon}
                          style={styles.favIconstyle}
                        />

                       

                          
                        
                      </View>
                    </TouchableOpacity>

                  </View>

                  <Text
                    style={styles.description}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod. Sed diam nonumy eirmod.
                  </Text>
                </View>

              </>

            </View>

          </View>
        </SharedElement>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sharedView: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'scroll'
  },
  contentView1: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,

  },
  contentContainer: {
    marginTop: -100,
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(174, 133, 255, 1)',
  },
  txt: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'SF-Pro-Display-Medium'

  },
  favIconCotainer: {
    flexDirection: 'row'
  },
  favIconstyle: {
    width: 20,
    height: 18,
    marginTop: 10,
  },
  animationFav: {
    width: 88,
    height: 88,
    marginTop: -10,
    marginLeft: 55,
  },
  description: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    padding: 10,
    marginTop: -55,
    fontFamily: 'SF-Pro-Display-Regular'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Details;
