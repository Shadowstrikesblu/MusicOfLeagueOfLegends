import React, { useEffect, useState } from 'react';
import { View, Button, TextInput, Modal, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {auth} from '../../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Comment = () => {
    const [iconName] = useState('chatbubble-outline');
    const [comment, setComment] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const user = auth.currentUser;
    const handleComment = () => {
        // Handle the comment submission here
        console.log('Comment:', comment);
        storeAndDisplayComments(user.displayName,comment);
        setComment('');
        setModalVisible(false);
    };
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const storedComments = await AsyncStorage.getItem('comments');
                setComments(storedComments ? JSON.parse(storedComments) : []);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchComments();
    }, []);

    const clearComments = async () => {
        try {
            // Clear comments from storage
            await AsyncStorage.removeItem('comments');

            // Clear comments from state
            setComments([]);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <View style={styles.comment} >
            <TouchableOpacity >
                <Ionicons name={iconName} size={24} color={iconName === 'black'} onPress={() => setModalVisible(true)}/>
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType="slide">
                <View>
                    <TextInput
                        placeholder="Type your comment"
                        value={comment}
                        onChangeText={text => setComment(text)}
                    />
                    <View>
                        {comments.map((comment, index) => (
                            <Text key={index}>{comment}</Text>
                        ))}
                    </View>
                    <Button title="Submit" onPress={handleComment} />
                    <Button title="Cancel" onPress={() => setModalVisible(false)} />
                    {/* <Button title="Clear Comments" onPress={clearComments} /> */}
                    {/* only for dev purpose */}
                </View>
            </Modal>
        </View>
    );
};

const storeAndDisplayComments = async (user, comment) => {
    try {
        // Get existing comments from storage
        let comments;
        try {
            const storedComments = await AsyncStorage.getItem('comments');
            comments = storedComments ? JSON.parse(storedComments) : [];
        } catch (error) {
            comments = [];
        }

        // Add new comment to the array
        comments.push(`${user}: ${comment}`);

        // Store updated comments in storage
        await AsyncStorage.setItem('comments', JSON.stringify(comments));

        // Display the comments
        console.log('Comments:', comments);
    } catch (error) {
        console.error('Error:', error);
    }
};

export default Comment;

const styles = StyleSheet.create({
    comment : {
        top : '-20%',
        left : '90%',
    }
})