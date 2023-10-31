import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, ImageBackground, View,Text } from 'react-native';
import AppButton from '../components/AppButton';
import {useFonts } from 'expo-font';
import * as Font from 'expo-font';
import color from '../config/color';

function LoginScreen(props) {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'League': require('../assets/fonts/BeaufortforLOL-Bold.ttf'),
            });
            setFontLoaded(true);
        }
        loadFonts();
    }, []);

    return (
        <>
        <ImageBackground
        source={require('../assets/heartsteel.jpg')}
        style={styles.background}>
            <View style={styles.logoContainer} >
                <Image style={styles.logo} source={require('../assets/mainicon.jpg')} />
                {fontLoaded && <Text style={styles.title}> The music of League of Legends </Text>}
            </View>
        </ImageBackground>
        <View >
            <ImageBackground
            source={require('../assets/summonersrift.jpg')}>
                <AppButton>Login</AppButton>
                <AppButton>Register</AppButton>
            </ImageBackground>
            
        </View>
        </>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        width : "100%",
        alignItems:"center",
      },
      logo: {
        height: 150,
        width: 150,
      },
      title:{
        fontFamily: "League",
        color:color.white,
        backgroundColor: color.black,
      }
})