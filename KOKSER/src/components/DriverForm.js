import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const DriverForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="License Number" value={licenseNumber} onChangeText={setLicenseNumber} />
      <TextInput placeholder="Registration Number" value={registrationNumber} onChangeText={setRegistrationNumber} />
      <Button title="Register" onPress={() => onSubmit({ name, email, password, licenseNumber, registrationNumber, role: 'driver' })} />
    </View>
  );
};

export default DriverForm;
