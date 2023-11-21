import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../config/color';
import { useFonts } from 'expo-font';

function AppButton({children}) {
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const ButtonPressed = () => {console.log("Button pressed")}
    return (
        <TouchableOpacity style={styles.button} onPress={ButtonPressed} >
            <Text style={styles.centerText}>{children}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;


const styles = StyleSheet.create({
    button:{
        height: 50,
        backgroundColor: color.loldarkblue,
        borderRadius: 10,
        borderColor: color.lolyellow,
        marginHorizontal: 10,
        marginVertical: 10,
        width: '100%',
    },
    centerText:{
        textAlign : 'center',
        fontSize : 25,
        color : color.lolyellow,
        fontFamily: "League",
    },
})