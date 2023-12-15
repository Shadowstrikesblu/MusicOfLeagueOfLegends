import {React,useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import {auth} from '../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';
import { useFonts } from 'expo-font';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import color from '../config/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileIcon from '../components/ProfileIcon';


function AccountScreen(){
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Bold.ttf'),
    });

    if (!loaded) {
        return null; // or render a loading indicator
    }
    



    const navigation = useNavigation();
    const user = auth.currentUser;
    const logout = async() => {
        auth.signOut().then(() => {
            console.log('User signed out!');
            navigation.navigate('Welcome');
          }).catch((error) => {
            console.log(error);
          });
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          console.log('url : ' + user.photoURL)
          profile = user.photoURL;
        } else {
          // User is signed out
          // ...
        }
      });
    return (
        <View>
            <ImageBackground style={styles.container} 
            source={require('../assets/profile.png')}
            >
                <View style={styles.content}>
                    {user ? (
                        <>  
                            <ProfileIcon />
                            <Text style={styles.text}>{user.displayName}</Text>
                        </>
                    ) : (
                        <Text style={styles.text}>Please sign in to view your account.</Text>
                    )}
                </View>
                <View style={styles.button}>
                    <AppButton  children={'LOGOUT'} funct={logout} />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        resizeMode: 'cover',
        justifyContent: 'center',
        height:'100%',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'League',
        top : '-30%'
    },
    button:{
        // position: 'absolute',
        bottom: "-15%", 
        width: "75%",
        left: "10%",
    }
});

export default AccountScreen;