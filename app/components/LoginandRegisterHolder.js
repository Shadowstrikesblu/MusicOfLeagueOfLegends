import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import { View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginB from '../components/buttons/LoginButton';
import RegisterB from '../components/buttons/RegisterButton';

function LoginandRegisterHolder(props,navigation) {
    return (
        <SafeAreaView style={styles.interactive} >
        <ImageBackground
        source={require('../assets/summonersrift.jpg')}  >
            <LoginB>Login</LoginB>
            <RegisterB>Register</RegisterB>
        </ImageBackground>
    </SafeAreaView>
    );
}

export default LoginandRegisterHolder;

const styles = StyleSheet.create({
    interactive:{

    },
})