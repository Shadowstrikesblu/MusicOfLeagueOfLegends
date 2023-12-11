import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ImageBackground } from 'react-native';
import color from '../config/color';
import { useFonts } from 'expo-font';
import AppButton from '../components/AppButton';
import {auth} from '../../firebaseConfig'
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


export default function LoginForm(props) {
    const navigation = useNavigation();
    const login = async() => {
        await signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed in!');
            navigation.navigate('Dashboard')
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View>
            <ImageBackground style={styles.container} 
            source={require('../assets/jhin2.jpg')}
            >
                <TextInput
                    style={styles.input}
                    placeholder="EMAIL"
                    placeholderTextColor={color.lolyellow}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="PASSWORD"
                    placeholderTextColor={color.lolyellow}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <AppButton children={'LOGIN'} funct={login}   />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
        borderColor: color.lolyellow,
        backgroundColor: color.lolblack,
        color: color.lolyellow,
        fontFamily: 'League',
        
        
    },
});
