import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { User, Phone, MapPin, Lock } from 'lucide-react-native';

interface SignupData {
  firstName: string;
  lastName: string;
  mobile: string;
  city: string;
  countryCode: string;
  createPassword: string;
  confirmPassword: string;
}

interface SignupProps {
  signupData: SignupData;
  setSignupData: (data: SignupData) => void;
  setActiveScreen: (screen: string) => void;
  handleSignup: () => void;
}

const renderSignup = (props: SignupProps) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.setActiveScreen('login')}>
          <Text style={styles.backButton}>← </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.row}>
          {/* First Name */}
          <View style={[styles.inputContainer, styles.flex1, styles.marginRight]}>
            <Text style={styles.label}>First Name</Text>
            <View style={styles.inputWrapper}>
              <User color="#6A0DAD" size={20} />
              <TextInput
                style={styles.input}
                placeholder="First name"
                value={props.signupData.firstName}
                onChangeText={(text) => props.setSignupData({...props.signupData, firstName: text})}
              />
            </View>
          </View>
          {/* Last Name */}
          <View style={[styles.inputContainer, styles.flex1, styles.marginLeft]}>
            <Text style={styles.label}>Last Name</Text>
            <View style={styles.inputWrapper}>
              <User color="#6A0DAD" size={20} />
              <TextInput
                style={styles.input}
                placeholder="Last name"
                value={props.signupData.lastName}
                onChangeText={(text) => props.setSignupData({...props.signupData, lastName: text})}
              />
            </View>
          </View>
        </View>

        <View style={[styles.row, styles.marginTop]}>
          {/* Country Code */}
          <View style={[styles.inputContainer, styles.flex1, styles.marginRight]}>
            <Text style={styles.label}>Country Code</Text>
            <View style={styles.inputWrapper}>
              <Phone color="#6A0DAD" size={20} />
              <TextInput
                style={styles.input}
                placeholder="+1"
                value={props.signupData.countryCode}
                onChangeText={(text) => props.setSignupData({...props.signupData, countryCode: text})}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          {/* Mobile Number */}
          <View style={[styles.inputContainer, styles.flex2, styles.marginLeft]}>
            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.inputWrapper}>
              <Phone color="#6A0DAD" size={20} />
              <TextInput
                style={styles.input}
                placeholder="Mobile number"
                value={props.signupData.mobile}
                onChangeText={(text) => props.setSignupData({...props.signupData, mobile: text})}
                keyboardType="phone-pad"
              />
            </View>
          </View>
        </View>

        {/* City */}
        <View style={[styles.inputContainer, styles.marginTop]}>
          <Text style={styles.label}>City</Text>
          <View style={styles.inputWrapper}>
            <MapPin color="#6A0DAD" size={20} />
            <TextInput
              style={styles.input}
              placeholder="City"
              value={props.signupData.city}
              onChangeText={(text) => props.setSignupData({...props.signupData, city: text})}
            />
          </View>
        </View>

        {/* Create Password */}
        <View style={[styles.inputContainer, styles.marginTop]}>
          <Text style={styles.label}>Create Password</Text>
          <View style={styles.inputWrapper}>
            <Lock color="#6A0DAD" size={20} />
            <TextInput
              style={styles.input}
              placeholder="Create password"
              value={props.signupData.createPassword}
              onChangeText={(text) => props.setSignupData({...props.signupData, createPassword: text})}
              secureTextEntry
            />
          </View>
        </View>

        {/* Confirm Password */}
        <View style={[styles.inputContainer, styles.marginTop]}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <Lock color="#6A0DAD" size={20} />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              value={props.signupData.confirmPassword}
              onChangeText={(text) => props.setSignupData({...props.signupData, confirmPassword: text})}
              secureTextEntry
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={props.handleSignup}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
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
  row: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  marginRight: {
    marginRight: 8,
  },
  marginLeft: {
    marginLeft: 8,
  },
  marginTop: {
    marginTop: 16,
  },
  inputContainer: {
    marginBottom: 16,
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
  signupButton: {
    backgroundColor: '#6A0DAD',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default renderSignup;