import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

function Heart(props) {
    const [iconName, setIconName] = useState('heart-outline');

    useEffect(() => {
        const getIconName = async () => {
            let iconName = await AsyncStorage.getItem('iconName');
            setIconName(iconName || 'heart-outline');
        };
        getIconName();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem('iconName', iconName);
    }, [iconName]);

    return (
        <View style ={styles.heart} >
            <TouchableOpacity onPress={() => setIconName(iconName === 'heart-outline' ? 'heart' : 'heart-outline')}>
                <Ionicons name={iconName} size={24} color={iconName === 'heart-outline' ? 'black' : 'red'} />
            </TouchableOpacity>
        </View>
    );
}

export default Heart;

const styles = StyleSheet.create({
    heart : {
        top : '-10%',
        left : '90%',
    }
})