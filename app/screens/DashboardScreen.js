import React from 'react';
import Card from '../components/Card';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import color from '../config/color';

function Dashboard(props) {
    return (  
    <ImageBackground source={require("../assets/summonersrift.jpg")}>
        <SafeAreaView>
        <View style={styles.container} >
            <Card
                title={'Paranoïa'}
                subtitle={'Two sides to a story but they never tell my side '}
                image={"https://d2wpdrdr9q2sj9.cloudfront.net/Paranoia.mp4"}
            />
            <Card
                title={'Giants'}
                subtitle={"Going too fast I've been living in slow-mo"}
                image={'https://d2wpdrdr9q2sj9.cloudfront.net/TrueDamage.mp4'}
            />
            </View>
            </SafeAreaView>
    </ImageBackground>
        
    );
}

export default Dashboard;

const styles = StyleSheet.create({

});
