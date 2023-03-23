import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions,ScrollView } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from "../../components/SocialSignInButtons";


const SignInscreen = () => {
    const [username, setUsername] =useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
      console.warn("Sign in");  
    };

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };
    const onSignUpPressed = () =>{
        console.warn('onSignUpPressed');
    };

    const {height} =useWindowDimensions();
    return (
        <ScrollView>
            <View style = {styles.root}>
            <Image
             source = {logo}
             style ={[styles.logo, {height: height *0.30}]}
                 resizeMode = "contain" 
             />    

             <CustomInput
              placeholder= "Username" 
              value ={username} 
              setValue = {setUsername}
              />
             <CustomInput 
             placeholder= "Password" 
             value ={password} 
             setValue = {setPassword}
             secureTextEntry ={true} 
             /> 

             <CustomButton 
             text = "Sign In" 
             onPress={onSignInPressed }
             bgColor ='#3871f3'
               />  

            <CustomButton 
            text = "Forgot password" 
             onPress={onForgotPasswordPressed } 
             type ='TERTIARY'
              />    
              <SocialSignInButtons/>  
              
            <CustomButton 
            text = "Dont have an account? Create one!"
            onPress={onSignUpPressed } 
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

    logo: {
        width: '70%',
        maxWidth: 450,
        maxHeight: 250,
    },
});

export default SignInscreen