import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import { View, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function LoginandRegisterHolder(props) {
    const navigation = useNavigation();
    const login = () => {
        navigation.navigate('LoginForm')
    }
    const register = () => {
        navigation.navigate('RegisterForm')
    }
    return (
        <SafeAreaView style={styles.interactive} >
        <ImageBackground
        source={require('../assets/summonersrift.jpg')}  >
            <AppButton children={'Login'} funct={login}/>
            <AppButton children={'Register'} funct={register}/>
        </ImageBackground>
    </SafeAreaView>
    );
}

export default LoginandRegisterHolder;

const styles = StyleSheet.create({
    interactive:{

    },
})