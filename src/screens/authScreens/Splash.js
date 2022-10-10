import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Image, View, PixelRatio, Dimensions, ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable'

const { width, height } = Dimensions.get('window')

const Splash = ({ navigation }) => {

    return (
        <ImageBackground source={require('../../assets/images/imageb.jpg')} style={styles.container}>
            {/* <Animatable.Image animation="zoomInUp" iterationCount={1} duration={1000} delay={100}
                style={styles.logo}
                source={require('../../assets/images/onBoarding/logo.png')}>
            </Animatable.Image> */}
            <Animatable.Text animation="zoomInUp" iterationCount={1} duration={1000} delay={100}
                style={styles.logoText}>PaymentApp
            </Animatable.Text>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    logo: {
        maxWidth: width - 60,
        resizeMode: 'contain'
    },
    logoText: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
        fontFamily: 'Roboto-Bold',
        color:'#000'
    }
})
