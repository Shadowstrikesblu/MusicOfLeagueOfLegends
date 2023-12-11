import {React} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import {auth} from '../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';
import { useFonts } from 'expo-font';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import color from '../config/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../components/logos'



function AccountScreen(){
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Bold.ttf'),
    });

    if (!loaded) {
        return null; // or render a loading indicator
    }
      
    const Iconrange = {
        'Aphelios': Images.logos.aphelios,
        'Ezreal': Images.logos.ezreal,
        'Kayn': Images.logos.kayn,
        'Ksante': Images.logos.ksante,
        'Noicon': Images.logos.noicon,
        'Sett': Images.logos.sett,
        'Yone': Images.logos.yone,
    };

    const change = () => {
        console.log('change');
        if(profile == Iconrange.Aphelios){
            auth.currentUser.updateProfile({
                photoURL: Iconrange.Ezreal,
            }).then(() => {
                console.log('User profile updated!');
                navigation.navigate('Account');
              }).catch((error) => {
                console.log(error);
              });
        }else if(profile == Iconrange.Ezreal){
            auth.currentUser.updateProfile({
                photoURL: Iconrange.Kayn,
            }).then(() => {
                console.log('User profile updated!');
                navigation.navigate('Account');
              }).catch((error) => {
                console.log(error);
              });
        }else if(profile == Iconrange.Kayn){
            auth.currentUser.updateProfile({
                photoURL: Iconrange.Ksante,
            }).then(() => {
                console.log('User profile updated!');
                navigation.navigate('Account');
              }).catch((error) => {
                console.log(error);
              });
        }else if(profile == Iconrange.Ksante){
            auth.currentUser.updateProfile({
                photoURL: Iconrange.Sett,
            }).then(() => {
                console.log('User profile updated!');
                navigation.navigate('Account');
              }).catch((error) => {
                console.log(error);
              });
        }else if(profile == Iconrange.Sett){
            auth.currentUser.updateProfile({
                photoURL: Iconrange.Yone,
            }).then(() => {
                console.log('User profile updated!');
                navigation.navigate('Account');
              }).catch((error) => {
                console.log(error);
              });
        }else if(profile == Iconrange.Yone){
            auth.currentUser.updateProfile({
                photoURL: Iconrange.Noicon,
            }).then(() => {
                console.log('User profile updated!');
                navigation.navigate('Account');
              }).catch((error) => {
                console.log(error);
              });
        }else if(profile == Iconrange.Noicon){
            auth.currentUser.updateProfile({
                photoURL: Iconrange.Aphelios,
            }).then(() => {
                console.log('User profile updated!');
                navigation.navigate('Account');
              }).catch((error) => {
                console.log(error);
              });
        }
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
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
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
                        
                            <SafeAreaView>
                                {/* <Image style={styles.logo} source={require('../assets/icons/noicon.png')} /> */}
                                <TouchableOpacity onPress={change}>
                                    <Image style={styles.logo} source={Iconrange.Noicon} />
                                </TouchableOpacity>
                            </SafeAreaView>
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
    logo: {
        height: 150,
        width: 150,
        top : '-88%',
        left : '-1%',
        borderRadius: 100,
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
        bottom: "-10%", 
        width: "75%",
        left: "10%",
    }
});

export default AccountScreen;
