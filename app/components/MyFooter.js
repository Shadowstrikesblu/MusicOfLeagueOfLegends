import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import color from '../config/color';
import MyButton from './IconButtons';
import { Text, View,StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

const MyFooter = () => {
    // StatusBar.setHidden(true);
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Heavy.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container} >
            <SafeAreaView style={styles.footer }>
                <MyButton name={"details"} title={"Search"} />
                <MyButton name={"home"} title={"Home"} />
                <MyButton name={"play"} title={"Add"} />    
            </SafeAreaView>
        </View>
    );
};

export default MyFooter;
const styles = StyleSheet.create({
    footer:{
        backgroundColor: color.loldarkblue,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '5%',
        width: '100%',

    },
    container:{
        // height: '10%',
        position: 'absolute',
        bottom: '7%',
        // marginTop:'50%'
    }
});

