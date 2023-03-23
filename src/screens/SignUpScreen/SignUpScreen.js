import React, {useState} from "react";
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from "../../components/SocialSignInButtons";

const SignUpScreen = () => {
    const [username, setUsername] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] = useState ('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn("Register"); 
      };

      const onSignInPressed = () =>{
        console.warn('onSignInPressed');
    };

    const onTermsOfUsePresswed =() =>{
        console.warn('onTermsOfUsePressed');
    };
    const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
    };

        return (
        <ScrollView>
            <View style = {styles.root}>
            <Text style ={styles.title} > Create an Account</Text>     
            
             <CustomInput
              placeholder= "Username" 
              value ={username} 
              setValue = {setUsername}
              />
            <CustomInput
                placeholder= "Email"
                value ={email} 
                setValue = {setEmail}
                />

             <CustomInput 
             placeholder= "Password" 
             value ={password} 
             setValue = {setPassword}
             secureTextEntry ={true} 
             /> 

             <CustomInput 
              placeholder= "Password" 
              value ={passwordRepeat} 
                setValue = {setPasswordRepeat}
                secureTextEntry ={true} 
                /> 

                <SocialSignInButtons/>

             <CustomButton 
             text = "Register" 
             onPress={onRegisterPressed }
             bgColor ='#3871f3'
               />  

               <Text style ={styles.text} > By registering, you confirm that you accept our{' '}
                <Text style ={styles.link} onPress={onTermsOfUsePresswed} >Terms of use</Text> and {' '} 
                <Text style ={styles.link} onPress={onPrivacyPressed} >Privacy Policy</Text>
                </Text>

            <CustomButton 
            text = "Have an account? Sign in"
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
 export default SignUpScreen;