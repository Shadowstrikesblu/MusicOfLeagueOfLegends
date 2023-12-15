import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Images from '../components/logos'
import { React,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

function ProfileIcon() {
    const [currentIcon, setCurrentIcon] = useState(0);
    
    const Iconrange = [
        Images.logos.aphelios,
        Images.logos.ezreal,
        Images.logos.kayn,
        Images.logos.ksante,
        Images.logos.noicon,
        Images.logos.sett,
        Images.logos.yone,
    ];

    const change = async () => {
        const newIconIndex = (currentIcon + 1) % Iconrange.length;
        setCurrentIcon(newIconIndex);
        await AsyncStorage.setItem('num', newIconIndex.toString()); // Save newIconIndex to AsyncStorage
    };

    // Get num from AsyncStorage or default to 0
    useEffect(() => {
        const getNum = async () => {
            let num = await AsyncStorage.getItem('num');
            setCurrentIcon(Number(num) || 0);
        };
        getNum();
    }, []);

    // Update num in AsyncStorage whenever currentIcon changes
    useEffect(() => {
        AsyncStorage.setItem('num', currentIcon.toString());
    }, [currentIcon]);
    return (
        <View>
            <SafeAreaView>
                <TouchableOpacity onPress={(change)}>
                    <Image style={styles.logo} source={Iconrange[currentIcon]} />
                </TouchableOpacity>
            </SafeAreaView>               
        </View>
    );
}

export default ProfileIcon;

const styles = StyleSheet.create({
    logo: {
        height: 150,
        width: 150,
        top : '-75%',
        left : '-2%',
        borderRadius: 100,
    },
})