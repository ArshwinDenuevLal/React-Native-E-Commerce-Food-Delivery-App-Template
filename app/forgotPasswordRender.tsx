import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Lock } from 'lucide-react-native';

interface ForgotPasswordData {
  newPassword: string;
  confirmNewPassword: string;
}

interface ForgotPasswordProps {
  forgotPasswordData: ForgotPasswordData;
  setForgotPasswordData: (data: ForgotPasswordData) => void;
  setActiveScreen: (screen: string) => void;
  handleForgotPassword: () => void;
}

const renderForgotPassword = (props: ForgotPasswordProps) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.setActiveScreen('login')}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>Enter your new password</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.inputWrapper}>
            <Lock color="#6A0DAD" size={20} />
            <TextInput
              style={styles.input}
              placeholder="New password"
              value={props.forgotPasswordData.newPassword}
              onChangeText={(text) => props.setForgotPasswordData({
                ...props.forgotPasswordData,
                newPassword: text
              })}
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm New Password</Text>
          <View style={styles.inputWrapper}>
            <Lock color="#6A0DAD" size={20} />
            <TextInput
              style={styles.input}
              placeholder="Confirm new password"
              value={props.forgotPasswordData.confirmNewPassword}
              onChangeText={(text) => props.setForgotPasswordData({
                ...props.forgotPasswordData,
                confirmNewPassword: text
              })}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={props.handleForgotPassword}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
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
  form: {
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    color: '#444444',
    fontWeight: '500',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F0FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    color: '#333333',
  },
  submitButton: {
    backgroundColor: '#6A0DAD',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default renderForgotPassword;