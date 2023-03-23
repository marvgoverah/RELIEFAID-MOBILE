import React from "react";
import{View, Text, TextInput, StyleSheet } from'react-native'

const CustomInput = ({value,setValue, placeholder, secureTextEntry }) => {
    return (
        <View styles = {styles.container}>
            <TextInput
            vlaue={value}
            onChangeText = {setValue}
             placeholder={placeholder} 
             style ={styles.input}
             secureTextEntry = {secureTextEntry}
             />
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        padding: 15,

        borderColor: '#80888a',
        borderWidth: 2,
        borderRadius: 8,

        paddingHorizontal: 10,
        marginVertical: 15,
        
    },
    input: {},
});

export default CustomInput