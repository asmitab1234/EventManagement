import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackHeader from '../../Components/Header/BackHeader'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AddEvent = () => {
    return (
        <View
            style={{ backgroundColor: '#fff', flex: 1, }}>
            <BackHeader title='Add' />
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsVerticalScrollIndicator={false}>
                <Text
                    style={styles.title}>
                    Event Name
                </Text>
                <TextInput
                    placeholder='Event Title'
                    style={styles.inputBox}
                />

                <Text
                    style={styles.title}>
                    Add Image
                </Text>
                <TouchableOpacity
                    style={styles.imgBox}>
                    <FontAwesome name="picture-o" size={24} color="#000" />
                </TouchableOpacity>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle}
                    // onPress={() => navigation.navigate('AppStack')}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

export default AddEvent

const styles = StyleSheet.create({
    inputBox: {
        borderWidth: 1,
        height: 42,
        borderRadius: 50,
        marginTop: 10,
        paddingHorizontal: 15,
    },
    title: {
        fontWeight: 'medium',
        fontSize: 14,
        marginTop: 20
    },
    imgBox: {
        paddingHorizontal: 10,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 15
    },
    buttonContainer: {
        // marginHorizontal: 30,
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
})