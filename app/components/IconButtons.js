import React from 'react';
import { TouchableOpacity, Text, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from '../config/color';
import { StyleSheet } from 'react-native';
const MyButton = ({ onPress, title,name }) => {
  return (
    <SafeAreaView>
    <TouchableOpacity onPress={onPress} style={styles.iconButton} >
        <Icon name={name} color={color.lolyellow} size={30} />
      {/* <Text>{title}</Text> */}
    </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyButton;

const styles = StyleSheet.create({
    iconButton: {
        // borderRadius: 20,
        // width: 40,
        // height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});