import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeServiceCard = ({ item }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('SingleScreen')}>
            <Image
                style={styles.imgBox}
                source={{ uri: item.img }}
            />
        </TouchableOpacity>
    )
}

export default HomeServiceCard

const styles = StyleSheet.create({
    imgBox: {
        height: 100,
        width: 100,
        borderRadius: 15,
        marginHorizontal: 5
    }
})