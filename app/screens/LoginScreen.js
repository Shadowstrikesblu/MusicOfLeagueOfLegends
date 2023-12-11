import React, { useState } from 'react';
import { Image, StyleSheet, ImageBackground, View, Text, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import color from '../config/color';
import LoginandRegisterHolder from '../components/LoginandRegisterHolder';

function LoginScreen(navigation) {
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/heartsteel.jpg')}
                    style={styles.background}
                    // resizeMode='contain'
                >
                    <SafeAreaView style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../assets/mainicon.jpg')} />
                        <Text style={styles.title}>The music of League of Legends</Text>
                    </SafeAreaView>
                </ImageBackground>
                <LoginandRegisterHolder />
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    background: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        // height:'100%',
        // width:'100%',
        // position: 'absolute',
        flex: 1,

    },
    container:{
        height: '100%',

    },
    logoContainer: {
        top: 70,
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
    },
    logo: {
        height: 150,
        width: 150,
    },
    title: {
        fontFamily: 'League',
        color: color.white,
        backgroundColor: color.black,
    },
});
