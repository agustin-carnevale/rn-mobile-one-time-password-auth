import React, {useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import SignupForm from './src/components/SignupForm'
import SigninForm from './src/components/SigninForm'
import Spacer from './src/components/Spacer'
import firebase from 'firebase'
import firebaseConfig from './src/firebaseConfig'

const App = ()=> {

  useEffect(()=>{
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
