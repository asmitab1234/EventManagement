import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>
            <Button
                title='Home'
                onPress={() => navigation.navigate('AppStack')}
                color={'#685656FF'}
            />
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})