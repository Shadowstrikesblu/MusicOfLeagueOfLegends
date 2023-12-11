import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ImageBackground } from 'react-native';
import color from '../config/color';
import { useFonts } from 'expo-font';
import AppButton from '../components/AppButton';
import {auth} from '../../firebaseConfig'
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

export default function RegisterForm(props) {
    const navigation = useNavigation();
    const register = async() => {
        await createUserWithEmailAndPassword(auth,email, password)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: Summoner,
                photoURL : 'Iconrange.Noicon',
                title : 'Heartsteel'
            })
            console.log('User account created ! Now please Login ! ');
            navigation.navigate('Welcome')
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
        
    };
    


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Summoner, setSummoner] = useState('');
    const validatePassword = (password) => {};

    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View>
            <ImageBackground style={styles.container} 
            source={require('../assets/yas.jpg')}
            >
                <TextInput
                    style={styles.input}
                    placeholder="SUMMONER NAME"
                    placeholderTextColor={color.lolyellow}
                    value={Summoner}
                    onChangeText={setSummoner}
                />
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
                                <TextInput
                    style={styles.input}
                    placeholder="PASSWORD"
                    placeholderTextColor={color.lolyellow}
                    secureTextEntry
                    value={password}
                    onChangeText={validatePassword}
                />
                <AppButton children={'REGISTER'} funct={register} />
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
