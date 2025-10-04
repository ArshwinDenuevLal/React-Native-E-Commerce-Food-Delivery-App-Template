import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

interface OtpProps {
  otp: string[];
  setOtp: (otp: string[]) => void;
  setActiveScreen: (screen: string) => void;
  handleOtpSubmit: () => void;
}

const renderOtp = (props: OtpProps) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.setActiveScreen('forgot')}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>Enter the code sent to your email</Text>
      </View>

      <View style={styles.otpContainer}>
        <View style={styles.otpInputContainer}>
          {props.otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => {
                const newOtp = [...props.otp];
                newOtp[index] = text;
                props.setOtp(newOtp);
              }}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={props.handleOtpSubmit}
      >
        <Text style={styles.verifyButtonText}>Verify & Reset Password</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 48,
  },
  header: {
    marginBottom: 24,
  },
  backButton: {
    color: '#6A0DAD',
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginTop: 8,
  },
  subtitle: {
    color: '#666666',
  },
  otpContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 48,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 256,
  },
  otpInput: {
    width: 56,
    height: 56,
    borderWidth: 2,
    borderColor: '#B794F4',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A0DAD',
  },
  verifyButton: {
    backgroundColor: '#6A0DAD',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default renderOtp;