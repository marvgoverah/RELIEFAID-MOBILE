import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions,ScrollView } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton';


const SignInscreen = () => {
    const [username, setUsername] =useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
      console.warn("Sign in");  
    };

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };
    const onSignInFacebook = () => {
        console.warn('onSignInFacebook');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    };
    const onSignInApple = () => {
        console.warn('onSignInApple');
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
            <CustomButton
             text = "Sign In with Facebook"
             onPress={onSignInFacebook }
             bgColor='#E7EAF4'
             fgColor='#4765A9'
             />   
            <CustomButton 
            text = "Sign In with Google"
             onPress={onSignInGoogle }
             bgColor='#FAE9EA'
             fgColor='#DD4D44' 
              />
            <CustomButton 
            text = "Sign In with ICLOUD" 
            onPress={onSignInApple }  
            bgColor='#e3e3e3'
            fgColor='#363636'
            />
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
        padding: 60,
    },

    logo: {
        width: '70%',
        maxWidth: 450,
        maxHeight: 250,
    },
});

export default SignInscreen