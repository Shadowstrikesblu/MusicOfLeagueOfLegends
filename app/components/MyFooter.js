import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import color from '../config/color';
import MyButton from './IconButtons';
import { Text, View,StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import Dashboard from '../screens/DashboardScreen';
import RegisterForm from '../screens/RegisterForm';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const MyFooter = () => {
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Heavy.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container} >
        <Tab.Navigator initialRouteName="Login" screenOptions={{headerShown: false }}>
            <Tab.Screen name="Login" component={LoginScreen} options={{title:"Home Screen ", tabBarIcon:({size,color})=>(
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ) }}   />
            <Tab.Screen name="Dashboard" component={Dashboard} options={{title:"Dashboard",tabBarIcon:({size,color})=>(
                <MaterialCommunityIcons name="dashboard" color={color} size={size} />
            ) }} />
            <Tab.Screen name="Register" component={RegisterForm} options={{title:"Register",tabBarIcon:({size,color})=>(
                <MaterialCommunityIcons name="account" color={color} size={size} />
            ) }} />
        </Tab.Navigator>
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

