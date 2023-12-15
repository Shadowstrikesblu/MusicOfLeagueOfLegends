import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import color from '../config/color';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import Heart from './buttons/Heart';
import Comment from './comment/Comment';

function Card({ title, subtitle, image }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [loaded] = useFonts({
        League: require('../assets/fonts/BeaufortforLOL-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: image,
                        }}
                        resizeMode="contain"
                        isLooping = {false}
                        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                    />
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={() =>
                                status.isMuted ? video.current.setIsMutedAsync(false) : video.current.setIsMutedAsync(true)
                            }
                        >
                            <Ionicons name={status.isMuted ? 'volume-mute' : 'volume-high'} size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={() => video.current.setPositionAsync(status.positionMillis - 5000)} // Seek backward by 5 seconds
                        >
                            <Ionicons name="play-back" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.playButton}
                            onPress={() =>
                                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                            }
                        >
                            <Text style={styles.playButtonText}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={() => video.current.setPositionAsync(status.positionMillis + 5000)} // Seek forward by 5 seconds
                        >
                            <Ionicons name="play-forward" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={() => video.current.presentFullscreenPlayer()}
                        >
                            <Ionicons name="expand" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.title}>{title}</Text>
                    <Heart/>
                    <ScrollView>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </ScrollView>
                    <Comment/>
            </View>
        </TouchableOpacity>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        height: 325,
        backgroundColor: color.white,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconButton: {
        margin: 10,
    },
    playButton: {
        margin: 10,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    playButtonText: {
        color: 'white',
        fontSize: 16,
    },
    title: {
        textAlign: 'left',
        marginLeft: 20,
        // marginTop: 10,
        fontFamily: 'League',
        fontSize: 24,
        color: color.primary,
    },
    container: {
        flex: 1,
    },

    subtitle: {
        // marginTop: 10,
        color: color.secondary,
        marginLeft: 20,
        fontSize: 16,
        fontStyle: 'italic',
    },
    imageContainer: {
        position: 'relative',
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    buttons: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        right: '0%',
        // left: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 10,
    },
    playButton: {
        backgroundColor: color.lolyellow,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    playButtonText: {
        color: color.white,
        fontWeight: 'bold',
    },
});

