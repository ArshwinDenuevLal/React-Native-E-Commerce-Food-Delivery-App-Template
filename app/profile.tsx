import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { 
  Camera, 
  Edit3, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  User,
  Heart,
  Briefcase,
  GraduationCap
} from 'lucide-react-native';

export default function ProfileScreen() {
  // Mock user data
  const [userData] = useState({
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    bio: "Digital designer passionate about creating beautiful user experiences. Love hiking and photography in my free time.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  });

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Edit profile functionality would open here');
  };

  const handleEditAvatar = () => {
    Alert.alert('Change Avatar', 'Avatar selection screen would open here');
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 pt-12">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-purple-800">Profile</Text>
          <Text className="text-gray-600">Manage your account information</Text>
        </View>

        {/* Profile Card */}
        <View className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <View className="items-center mb-6">
            {/* Avatar */}
            <View className="relative">
              <Image 
                source={{ uri: userData.avatar }} 
                className="w-24 h-24 rounded-full"
              />
              <TouchableOpacity 
                className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2"
                onPress={handleEditAvatar}
              >
                <Camera color="white" size={16} />
              </TouchableOpacity>
            </View>
            
            {/* Name and Edit Button */}
            <View className="flex-row items-center mt-4">
              <Text className="text-2xl font-bold text-gray-800">{userData.name}</Text>
              <TouchableOpacity 
                className="ml-3 bg-purple-100 p-2 rounded-full"
                onPress={handleEditProfile}
              >
                <Edit3 color="#6A0DAD" size={16} />
              </TouchableOpacity>
            </View>
            
            {/* Member Since */}
            <View className="flex-row items-center mt-2">
              <Calendar color="#9CA3AF" size={16} />
              <Text className="text-gray-500 ml-1">Member since {userData.joinDate}</Text>
            </View>
          </View>
          
          {/* Bio */}
          <View className="border-t border-gray-100 pt-4">
            <Text className="text-gray-700 text-center">{userData.bio}</Text>
          </View>
        </View>

        {/* Contact Information */}
        <View className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <Text className="text-lg font-bold text-purple-800 mb-4">Contact Information</Text>
          
          <View className="space-y-4">
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center mr-4">
                <Mail color="#6A0DAD" size={20} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-500 text-sm">Email</Text>
                <Text className="text-gray-800">{userData.email}</Text>
              </View>
            </View>
            
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center mr-4">
                <Phone color="#6A0DAD" size={20} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-500 text-sm">Phone</Text>
                <Text className="text-gray-800">{userData.phone}</Text>
              </View>
            </View>
            
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center mr-4">
                <MapPin color="#6A0DAD" size={20} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-500 text-sm">Location</Text>
                <Text className="text-gray-800">{userData.location}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Additional Information */}
        <View className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <Text className="text-lg font-bold text-purple-800 mb-4">About</Text>
          
          <View className="space-y-4">
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center mr-4">
                <Briefcase color="#6A0DAD" size={20} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-500 text-sm">Occupation</Text>
                <Text className="text-gray-800">Senior Product Designer</Text>
              </View>
            </View>
            
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center mr-4">
                <GraduationCap color="#6A0DAD" size={20} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-500 text-sm">Education</Text>
                <Text className="text-gray-800">MFA Design, Stanford University</Text>
              </View>
            </View>
            
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center mr-4">
                <Heart color="#6A0DAD" size={20} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-500 text-sm">Interests</Text>
                <Text className="text-gray-800">Photography, Hiking, UI/UX</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity 
          className="bg-purple-600 py-4 rounded-2xl items-center mb-8"
          onPress={handleEditProfile}
        >
          <Text className="text-white font-bold text-lg">Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}