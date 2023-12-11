import { SafeAreaView, StyleSheet,Image } from 'react-native';
import React from 'react';
import color from '../config/color';
import MyButton from './IconButtons';
import { Text, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const MyHeader = () => {
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Heavy.ttf'),
    });
    const navigation = useNavigation();
    const account = () => {
        navigation.navigate('Account');
    };

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <MyButton name={"rewind"} title={"Go back"} />
                <Text style={styles.title}>The Music of League</Text>
                <MyButton name={"account"} title={"My Account"} onPress={account} />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: color.loldarkblue,
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5%',
    },
    title: {
        color: color.white,
        marginHorizontal: '19%',
        fontFamily: 'League',
    },
    container: {
        // height: '10%',
    },
});

export default MyHeader;

