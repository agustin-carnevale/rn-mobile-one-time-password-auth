import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {Input, Button, Text} from 'react-native-elements'
import firebaseAPI from '../api/firebaseAPI'
import Spacer from './Spacer'

const SignupForm = ()=>{
    const [phone, setPhone] = useState('')

    const onSubmit = async ()=>{
        try {
            await firebaseAPI.post('/createUser',{phone})
            firebaseAPI.post('/requestOneTimePassword',{phone})
        } catch (error) {
            console.error(error)
        }  
    }

    return (
        <View>
            <Spacer>
                <Text h4>Sign Up</Text>
            </Spacer>
            <Spacer>
                <Input 
                    style={styles.input}
                    label="Enter Phone Number"
                    onChangeText={setPhone}
                    value={phone}
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
        margin: 40,
    },
    button:{
        marginHorizontal: 40
    }
})


export default SignupForm