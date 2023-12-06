
// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from '../firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Profile');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder=Email onChangeText={(text) => setEmail(text)} />
      <TextInput
        placeholder=Password
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title=Login onPress={handleLogin} />
    </View>
  );
}

