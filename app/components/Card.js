import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import color from '../config/color';
import { Video } from 'expo-av';

import { useFonts } from 'expo-font';

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
                        isLooping
                        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                    />
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.playButton}
                            onPress={() =>
                                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                            }
                        >
                            <Text style={styles.playButtonText}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        height: 300,
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
    title: {
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 10,
        fontFamily: 'League',
        fontSize: 24,
        color: color.primary,
    },
    container: {
        flex: 1,
    },
    subtitle: {
        marginTop: 10,
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
        right: 0,
        left: 0,
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

