import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ImageBackground } from 'react-native';
import color from '../config/color';
import { useFonts } from 'expo-font';
import AppButton from '../components/AppButton';


export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            source={require('../assets/jhin2.jpg')}
            >
                <TextInput
                    style={styles.input}
                    placeholder="SUMMONER NAME"
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
                <AppButton>LOGIN</AppButton>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
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
        fontFamily: 'League',
        
        
    },
});
