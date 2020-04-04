import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {Input, Button, Text} from 'react-native-elements'
import firebaseAPI from '../api/firebaseAPI'
import Spacer from './Spacer'
import firebase from 'firebase'

const SigninForm = ()=>{
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')

    const onSubmit = async ()=>{
        try {
            const {data} = await firebaseAPI.post('/verifyOneTimePassword',{phone,code})
            firebase.auth().signInWithCustomToken(data.token)
        } catch (error) {
            console.error(error)
        }  
    }

    return (
        <View>
            <Spacer>
                <Text h4>Login:</Text>
            </Spacer>
            <Spacer>
                <Input 
                    style={styles.input}
                    label="Enter Phone Number"
                    onChangeText={setPhone}
                    value={phone}
                />
                <Input 
                    style={styles.input}
                    label="Enter Code"
                    onChangeText={setCode}
                    value={code}
                />
            </Spacer>
            <Button 
                style={styles.button}
                title="Submit"
                onPress={onSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 40
    },
    button:{
        marginHorizontal: 40
    }
})

export default SigninForm