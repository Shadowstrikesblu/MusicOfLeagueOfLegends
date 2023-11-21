import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import { View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import color from '../config/color';

function LoginandRegisterHolder(props) {
    return (
        <SafeAreaView style={styles.interactive} >
        <ImageBackground
        source={require('../assets/summonersrift.jpg')}  >
            <AppButton>Login</AppButton>
            <AppButton>Register</AppButton>
        </ImageBackground>
    </SafeAreaView>
    );
}

export default LoginandRegisterHolder;

const styles = StyleSheet.create({
    interactive:{

    },
})