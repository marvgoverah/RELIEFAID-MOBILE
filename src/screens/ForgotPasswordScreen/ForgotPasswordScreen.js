import React, {useState} from "react";
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from "../../components/SocialSignInButtons";


const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const onConfirmPressed = () => {
        console.warn("Confirm Pressed"); 
      };

    const onSignInPressed = () => {
        console.warn("Back to Sign in Pressed"); 
      };

      const onResendPressed = () => {
        console.warn("OnResendPressed"); 
      };

        return (
        <ScrollView>
            <View style = {styles.root}>
            <Text style ={styles.title} > Rest your Password</Text>     
            
             <CustomInput
              placeholder= "Username" 
              value ={username} 
              setValue = {setUsername}
              />

             <CustomButton 
             text = "Send" 
             onPress={onConfirmPressed }
             bgColor ='#3871f3'
               />  
                                
            <CustomButton 
            text = "Back to Sign in"
            onPress={onSignInPressed } 
            type ='TERTIARY'
             />  


       </View>
       </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
         title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
        text: {
        color: 'gray',
        marginVertical: 10,
        },
        link: {
        color: '#FDB075',
        },

});
 export default ForgotPasswordScreen;