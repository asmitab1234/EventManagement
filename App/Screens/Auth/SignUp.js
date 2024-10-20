import { Image, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import {FontAwesome} from 'react-native-vector-icons'

const SignUp = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

            <Image
                source={require('../../Assets/apple.png')}
                style={styles.imgStyl}
            />

            <TextInput
                placeholder='Name'
                style={styles.inputBox}
            />

            <TextInput
                placeholder='Email Id'
                style={styles.inputBox}
                keyboardType='email-address'
            />

            <TextInput
                placeholder='Password'
                style={styles.inputBox}
                secureTextEntry={true}
            />

            <TextInput
                placeholder='Confirm Password'
                style={styles.inputBox}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.imgBox}>
{/* <FontAwesome
name='gallery'
/> */}
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>
                <Text
                    style={styles.bottomText}>
                    Already have an account?{' '}
                </Text>
                <Pressable
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text
                        style={{
                            ...styles.bottomText,
                            color: '#5A738DFF'
                        }}>
                        SignIn Here
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

export default SignUp

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
        marginVertical: 30
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
        fontWeight: 'regular',
    },
    imgBox: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal:15,
        marginVertical:15
    }
})
