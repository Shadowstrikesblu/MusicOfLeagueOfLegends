import React from 'react';
import Card from '../components/Card';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import color from '../config/color';

function Dashboard(props) {
    return (  
        <ImageBackground source={require("../assets/summonersrift.jpg")}>
            <ScrollView contentContainerStyle={{flex:0}} >
                <View style={styles.container} >
                    <SafeAreaView>
                            <Card
                                title={'Paranoïa'}
                                subtitle={'Two sides to a story but they never tell my side '}
                                image={"https://d2wpdrdr9q2sj9.cloudfront.net/Paranoia.mp4"}
                            />
                    </SafeAreaView>
                    <SafeAreaView>
                    <Card
                        title={'Giants'}
                        subtitle={"Going too fast I've been living in slow-mo"}
                        image={'https://d2wpdrdr9q2sj9.cloudfront.net/TrueDamage.mp4'}
                    />
                    </SafeAreaView>
                    <SafeAreaView>
                    <Card
                        title={'GODS'}
                        subtitle={"GA-GA-GA-GA-GA-GODS"}
                        image={'https://d2wpdrdr9q2sj9.cloudfront.net/Gods.mp4'}
                    />
                    <Card
                        title={'Burn It All Down'}
                        subtitle={"Cause if you're gonna burn it all down "}
                        image={'https://d2wpdrdr9q2sj9.cloudfront.net/Burnitalldown.mp4'}
                    />
                    </SafeAreaView>
                </View>
            </ScrollView>
        </ImageBackground>
        
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container:{
        height: '100%',
        marginBottom:'50%',
    }
});
