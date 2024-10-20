import { Image, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const SignIn = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    
    const form = async () => {
        // Email validation
        if (!email) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }

        // Password validation
        if (!password) {
            setPasswordError('Password is required')
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters')
        } else {
            setPasswordError(false)
        }

        if (!email || !password) {
            return false
        }
    }

    const handleSignIn = () => {
        if (form()) {
            console.warn('Success', 'You are signed in!')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

            <View style={{ height: 80 }} />

            <Image
                source={require('../../Assets/apple.png')}
                style={styles.imgStyl}
            />

            <TextInput
                placeholder='Email Id'
                style={styles.inputBox}
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            <TextInput
                placeholder='Password'
                style={styles.inputBox}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                     onPress={handleSignIn}
                    // onPress={() => navigation.navigate('AppStack')}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>
                <Text style={styles.bottomText}>Don't have an account?{' '}</Text>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ ...styles.bottomText, color: '#5A738DFF' }}>Register Here</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputBox: {
        borderWidth: 1,
        marginHorizontal: 15,
        height: 42,
        borderRadius: 50,
        marginTop: 10,
        paddingHorizontal: 15,
    },
    imgStyl: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginVertical: 60
    },
    buttonContainer: {
        marginHorizontal: 30,
        marginTop: 20,
        borderRadius: 50,
    },
    buttonStyle: {
        backgroundColor: '#5A738DFF',
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomText: {
        color: '#000',
        fontSize: 14,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 20,
        marginTop: 5,
    }
})
