import LoginScreen from './app/screens/LoginScreen';
import {useFonts } from 'expo-font';
import React from 'react';
import Dashboard from './app/screens/DashboardScreen';
import MyHeader from './app/components/MyHeader';
import { SafeAreaView, View } from 'react-native';
import MyFooter from './app/components/MyFooter';
import LoginForm from './app/screens/LoginForm';

//Afficher le header et le footer seulement si connecté donc pas sur le login screen
export default function App (){
      return (
            <View >
                  <MyHeader />
                  {/* <Dashboard /> */}
                  <LoginForm/>
                  <MyFooter />
            </View>
          );
}


