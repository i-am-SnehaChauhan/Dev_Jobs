import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import styles from '../components/signup/signup.style';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter(); // Initialize the router

  const handleSignUp = () => {
    // Check if all fields are filled
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    // Navigate to the home page on successful signup
    Alert.alert('Success', 'Sign up successful!');
    router.push('/home');
  };

  return (
    <View style={styles.container}>

      {/* Project Name */}
      <Text style={styles.projectName}>JobShift</Text>
      
      {/* Signup Heading */}
      <Text style={styles.heading}>Sign Up</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
