// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import firebase from '../firebase';

export default function ProfileScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View>
      <Text>Welcome to the Villanova Messaging App!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import firebase from '../firebase';

export default function ProfileScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View>
      <Button title=Logout onPress={handleLogout} />
    </View>
  );
}

