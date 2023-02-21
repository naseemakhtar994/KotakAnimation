/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityBase,
    useColorScheme,
    View,
} from 'react-native';

import Animated from 'react-native-reanimated';
import SensorAnimatedImage from './SensorAnimatedImage';
import DogAnimatedImage from './DogAnimatedImage';
import AnimatedView from './AnimatedView';
import LinearGradient from 'react-native-linear-gradient';
import Lottie from 'lottie-react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Offset } from '@shopify/react-native-skia';

function Main({ navigation }) {
    const [favICon, setFavIcon] = useState(require('../assets/HeartFilled.png'));

    const onPressCard = () => {
        // Chaging Image of Heart Icon with animation

        if (favICon === require('../assets/HeartOutline.png')) {
            animationRef.current.play();
            setTimeout(() => {
                animationRef.current.reset();

            }, 250)
            setFavIcon(require('../assets/HeartFilled.png'))
        } else {
            setFavIcon(require('../assets/HeartOutline.png'))

        }
    }

    const animationRef = useRef();
    return (
        <LinearGradient colors={['#150E21', '#212121',]} style={styles.mainContainer}>

            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    navigation.navigate('Detail')
                }}
            >
                <SharedElement id={`main`}>
                    <View>
                        <View style={styles.container} >
                            <SensorAnimatedImage
                                image={require('../assets/Space.png')}
                                order={1}
                            />
                            <DogAnimatedImage
                                image={require('../assets/Dog.png')}
                                order={2}
                            />
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            onPress={onPressCard}>
                            <View style={styles.contentMaincontainer}>
                                <Text style={styles.title} >Canis infinitum</Text>
                                <View>
                                    <Lottie
                                        style={styles.animationView}
                                        ref={animationRef}
                                        source={require('../assets/Heart pop.json')}
                                        loop />
                                    <Image
                                        source={favICon}
                                        style={styles.favICon}
                                    />

                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                </SharedElement>
            </TouchableOpacity>
            <View style={styles.indicatorContainer}>
                <AnimatedView />
            </View>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    indicatorContainer: {
        backgroundColor: '#363636',
        height: 10,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 30,
        overflow: 'scroll'

    },
    favICon: {
        width: 20,
        height: 18,
        marginLeft: 20,
        // marginTop:60,
    },
    animationView: {
        width: 115,
        height: 115,
        position: 'absolute',
        marginTop: -22,
        marginLeft: -13

    },
    container: {
        width: 296,
        height: 496,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        overflow: 'scroll'
    },

    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    title: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 24,
        fontFamily: 'SF-Pro-Display-Medium'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    contentMaincontainer: {
        position: 'relative',
        marginTop: -60,
        backgroundColor: 'rgba(52, 52, 52, 0.76)',
        // backgroundColor:'rgba(103, 48, 213, 0.77)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(174, 133, 255, 1)',
        padding: 10,
        height: 60,
        flexDirection: 'row',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
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

export default Main;
