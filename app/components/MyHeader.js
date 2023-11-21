import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import color from '../config/color';
import MyButton from './IconButtons';
import { Text, View,StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

const MyHeader = () => {
    // StatusBar.setHidden(true);
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Heavy.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container }>
            <SafeAreaView style={styles.header} >
            <MyButton name={"rewind"} title={"Go back"} />
            <Text style={styles.title}>The Music of League</Text>
            <MyButton name={"account"} title={"My Account"} />
            </SafeAreaView>
        </View>
    );
};

export default MyHeader;
const styles = StyleSheet.create({
    header:{
        backgroundColor: color.loldarkblue,
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5%',
    },
    title : {
        color: color.white,
        marginHorizontal: '19%',
        fontFamily: 'League',
    },
    container:{
        // height: '10%',
    } ,
});

