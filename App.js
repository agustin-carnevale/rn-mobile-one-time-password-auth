import React, {useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import SignupForm from './src/components/SignupForm'
import SigninForm from './src/components/SigninForm'
import Spacer from './src/components/Spacer'
import firebase from 'firebase'

const App = ()=> {

  useEffect(()=>{
    const firebaseConfig = {
      apiKey: "AIzaSyAlwmWHiz5K4IGf_jSk9maiyvpP3mMv-C0",
      authDomain: "one-time-password-app-60476.firebaseapp.com",
      databaseURL: "https://one-time-password-app-60476.firebaseio.com",
      projectId: "one-time-password-app-60476",
      storageBucket: "one-time-password-app-60476.appspot.com",
      messagingSenderId: "967862860232",
      appId: "1:967862860232:web:a01efe86a1a7acbf7fe8fd",
      measurementId: "G-BJXEPED8QT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  },[])

  return (
    <View style={styles.container}>
      <SignupForm />
      <Spacer />
      <SigninForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
  },
});

export default App
