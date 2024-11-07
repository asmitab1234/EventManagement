import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BackHeader from '../../Components/Header/BackHeader'
import Icon from 'react-native-vector-icons/FontAwesome';
import ServiceListCard from '../../Components/Service/ServiceListCard';

const SingleScreen = () => {
    const navigation = useNavigation()

    const serviceArr = [
        { img: 'https://images.unsplash.com/photo-1529636120425-66f3708694e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVudWV8ZW58MHx8MHx8fDA%3D' },
        { img: 'https://images.unsplash.com/photo-1529636120425-66f3708694e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVudWV8ZW58MHx8MHx8fDA%3D' },
        { img: 'https://images.unsplash.com/photo-1529636120425-66f3708694e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVudWV8ZW58MHx8MHx8fDA%3D' },
        { img: 'https://images.unsplash.com/photo-1529636120425-66f3708694e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVudWV8ZW58MHx8MHx8fDA%3D' },
        { img: 'https://images.unsplash.com/photo-1529636120425-66f3708694e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVudWV8ZW58MHx8MHx8fDA%3D' },
        { img: 'https://images.unsplash.com/photo-1529636120425-66f3708694e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVudWV8ZW58MHx8MHx8fDA%3D' },
    ]

    return (
        <View
            style={{ backgroundColor: '#fff', flex: 1, }}>
            <BackHeader title='Details' add='AddEvent' />
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsVerticalScrollIndicator={false}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color="#545252FF" style={styles.searchIcon} />
                    <TextInput placeholder="Search" style={styles.inputStyl} />
                </View>
                <Image
                    style={styles.imageBanner}
                    source={{ uri: 'https://images.unsplash.com/photo-1486591978090-58e619d37fe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fHww' }}
                />

                <View
                    style={{
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 15,
                        marginTop: 15
                    }}>
                    {serviceArr.map((item, index) => (
                        <ServiceListCard
                            key={index}
                            item={item}
                        />
                    ))}
                </View>


            </ScrollView>
        </View>
    )
}

export default SingleScreen

const styles = StyleSheet.create({
    inputStyl: {
        flex: 1,
        height: 43,
        borderRadius: 30,
        paddingLeft: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#545252FF',
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 5,
    },
    imageBanner: {
        height: 200,
        borderRadius: 15,
    },

})