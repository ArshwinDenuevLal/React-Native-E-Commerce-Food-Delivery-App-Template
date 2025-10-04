import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch, Alert } from 'react-native';
import { 
  Moon, 
  Bell, 
  Mail, 
  Smartphone, 
  Lock, 
  User, 
  Palette, 
  Shield,
  LogOut,
  ChevronRight,
  Key,
  MapPin,
  CreditCard
} from 'lucide-react-native';

export default function SettingsScreen() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Notification preferences
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
    promotional: false
  });
  
  // Account information (mock data)
  const accountInfo = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY"
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    Alert.alert(
      'Theme Changed', 
      `Switched to ${!isDarkMode ? 'dark' : 'light'} mode`,
      [{ text: 'OK' }]
    );
  };

  const handleNotificationToggle = (type: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [type]: !notifications[type]
    });
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive' }
      ]
    );
  };

  const SettingsSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <View className="mb-6">
      <Text className="text-lg font-bold text-purple-800 mb-3">{title}</Text>
      <View className="bg-white rounded-xl overflow-hidden">
        {children}
      </View>
    </View>
  );

  const SettingsItem = ({ 
    icon, 
    label, 
    value, 
    onPress,
    hasSwitch = false,
    switchValue = false,
    onSwitchChange
  }: { 
    icon: React.ReactNode; 
    label: string; 
    value?: string; 
    onPress?: () => void;
    hasSwitch?: boolean;
    switchValue?: boolean;
    onSwitchChange?: () => void;
  }) => (
    <TouchableOpacity 
      className="flex-row items-center py-4 px-4 border-b border-gray-100 last:border-b-0"
      onPress={onPress}
    >
      <View className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center mr-4">
        {icon}
      </View>
      <View className="flex-1">
        <Text className="text-gray-800 font-medium">{label}</Text>
        {value && <Text className="text-gray-500 text-sm mt-1">{value}</Text>}
      </View>
      {hasSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: '#e5e7eb', true: '#6A0DAD' }}
          thumbColor={switchValue ? '#ffffff' : '#f4f4f5'}
        />
      ) : (
        <ChevronRight color="#9CA3AF" size={20} />
      )}
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="px-4 pt-12">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-purple-800">Settings</Text>
          <Text className="text-gray-600">Manage your preferences</Text>
        </View>

        {/* Theme Settings */}
        <SettingsSection title="Appearance">
          <SettingsItem
            icon={<Palette color="#6A0DAD" size={20} />}
            label="Dark Mode"
            hasSwitch={true}
            switchValue={isDarkMode}
            onSwitchChange={handleThemeToggle}
          />
        </SettingsSection>

        {/* Notification Settings */}
        <SettingsSection title="Notifications">
          <SettingsItem
            icon={<Bell color="#6A0DAD" size={20} />}
            label="Push Notifications"
            hasSwitch={true}
            switchValue={notifications.push}
            onSwitchChange={() => handleNotificationToggle('push')}
          />
          <SettingsItem
            icon={<Mail color="#6A0DAD" size={20} />}
            label="Email Notifications"
            hasSwitch={true}
            switchValue={notifications.email}
            onSwitchChange={() => handleNotificationToggle('email')}
          />
          <SettingsItem
            icon={<Smartphone color="#6A0DAD" size={20} />}
            label="SMS Notifications"
            hasSwitch={true}
            switchValue={notifications.sms}
            onSwitchChange={() => handleNotificationToggle('sms')}
          />
          <SettingsItem
            icon={<User color="#6A0DAD" size={20} />}
            label="Promotional Emails"
            hasSwitch={true}
            switchValue={notifications.promotional}
            onSwitchChange={() => handleNotificationToggle('promotional')}
          />
        </SettingsSection>

        {/* Account Settings */}
        <SettingsSection title="Account">
          <SettingsItem
            icon={<User color="#6A0DAD" size={20} />}
            label="Personal Information"
            value={accountInfo.name}
            onPress={() => Alert.alert('Personal Info', 'Edit personal information screen would open')}
          />
          <SettingsItem
            icon={<Mail color="#6A0DAD" size={20} />}
            label="Email Address"
            value={accountInfo.email}
            onPress={() => Alert.alert('Email', 'Edit email screen would open')}
          />
          <SettingsItem
            icon={<Smartphone color="#6A0DAD" size={20} />}
            label="Phone Number"
            value={accountInfo.phone}
            onPress={() => Alert.alert('Phone', 'Edit phone number screen would open')}
          />
          <SettingsItem
            icon={<MapPin color="#6A0DAD" size={20} />}
            label="Location"
            value={accountInfo.location}
            onPress={() => Alert.alert('Location', 'Edit location screen would open')}
          />
          <SettingsItem
            icon={<Lock color="#6A0DAD" size={20} />}
            label="Password"
            onPress={() => Alert.alert('Password', 'Change password screen would open')}
          />
          <SettingsItem
            icon={<Shield color="#6A0DAD" size={20} />}
            label="Privacy Settings"
            onPress={() => Alert.alert('Privacy', 'Privacy settings screen would open')}
          />
        </SettingsSection>

        {/* Security Settings */}
        <SettingsSection title="Security">
          <SettingsItem
            icon={<Key color="#6A0DAD" size={20} />}
            label="Two-Factor Authentication"
            value="Enabled"
            onPress={() => Alert.alert('2FA', 'Two-factor authentication settings would open')}
          />
          <SettingsItem
            icon={<CreditCard color="#6A0DAD" size={20} />}
            label="Payment Methods"
            value="Visa ending in 1234"
            onPress={() => Alert.alert('Payments', 'Payment methods screen would open')}
          />
        </SettingsSection>

        {/* Logout */}
        <TouchableOpacity 
          className="flex-row items-center py-4 px-4 bg-white rounded-xl mb-8"
          onPress={handleLogout}
        >
          <View className="w-10 h-10 rounded-full bg-red-100 items-center justify-center mr-4">
            <LogOut color="#DC2626" size={20} />
          </View>
          <Text className="text-red-600 font-bold text-lg">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}