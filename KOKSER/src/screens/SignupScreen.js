import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import UserForm from '../components/UserForm';
import DriverForm from '../components/DriverForm';

const SignupScreen = ({ navigation }) => {
  const [isDriver, setIsDriver] = useState(false);

  const registerUser = async (userData) => {
    try {
      await axios.post('http://localhost:3000/api/auth/register', userData);
      navigation.replace('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Register as:</Text>
      <Button title="User" onPress={() => setIsDriver(false)} />
      <Button title="Driver" onPress={() => setIsDriver(true)} />
      {isDriver ? <DriverForm onSubmit={registerUser} /> : <UserForm onSubmit={registerUser} />}
    </View>
  );
};

export default SignupScreen;
