import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin } from 'lucide-react-native';
import renderLogin from './loginRender';
import renderSignup from "./signupRender";
import renderForgotPassword from "./forgotPasswordRender";
import renderOtp from "./otpRender";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [activeScreen, setActiveScreen] = useState('login'); // login, signup, forgot, otp
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    city: '',
    countryCode: '+1',
    createPassword: '',
    confirmPassword: ''
  });
  const [forgotPasswordData, setForgotPasswordData] = useState({
    newPassword: '',
    confirmNewPassword: ''
  });
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    // Mock login implementation

  Alert.alert(
       'Success', 
       'Login successful!',
       [{ text: 'OK', onPress: () => setActiveScreen('home') }]
    );


    // Navigate to home screen or main app area
    // For this example, we'll just reset the form
    setEmail('');
    setPassword('');
    setIsPasswordVisible(false);
    setActiveScreen('index');
  

  };

  const handleSignup = () => {
    if (!signupData.firstName || !signupData.lastName || !signupData.mobile || 
        !signupData.city || !signupData.createPassword || !signupData.confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    if (signupData.createPassword !== signupData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    // Mock signup implementation
    Alert.alert(
      'Account Created', 
      'A verification email has been sent to your email address. Please check your inbox.',
      [{ text: 'OK', onPress: () => setActiveScreen('login') }]
    );
  };

  const handleForgotPassword = () => {
    if (!forgotPasswordData.newPassword || !forgotPasswordData.confirmNewPassword) {
      Alert.alert('Error', 'Please fill in both password fields');
      return;
    }
    
    if (forgotPasswordData.newPassword !== forgotPasswordData.confirmNewPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    // Mock OTP sending
    Alert.alert(
      'OTP Sent', 
      'An OTP has been sent to your registered email address',
      [{ text: 'OK', onPress: () => setActiveScreen('otp') }]
    );
  };

  const handleOtpSubmit = () => {
    const otpString = otp.join('');
    if (otpString.length !== 4) {
      Alert.alert('Error', 'Please enter a valid 4-digit OTP');
      return;
    }
    
    // Mock OTP verification
    Alert.alert(
      'Success', 
      'Password reset successful!',
      [{ text: 'OK', onPress: () => setActiveScreen('login') }]
    );
  };


  const renderLoginScreen  = renderLogin({email, setEmail, password, setPassword, isPasswordVisible, setIsPasswordVisible, setActiveScreen, handleLogin});

  const renderSignupScreen = renderSignup({signupData, setSignupData, setActiveScreen, handleSignup});

  const renderForgotPasswordScreen = renderForgotPassword({forgotPasswordData, setForgotPasswordData, setActiveScreen, handleForgotPassword});

  const renderOtpScreen = renderOtp({otp, setOtp, setActiveScreen, handleOtpSubmit});

  return (
    <>
      {activeScreen === 'login' && renderLoginScreen}
      {activeScreen === 'signup' && renderSignupScreen}
      {activeScreen === 'forgot' && renderForgotPasswordScreen}
      {activeScreen === 'otp' && renderOtpScreen}
    </>
  );
}