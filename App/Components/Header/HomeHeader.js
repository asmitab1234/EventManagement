import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeader = () => {
    return (
        <View>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 15,
                    marginTop: 15,
                    marginBottom:8
                }}>
                <FontAwesome6 name='bars' size={26} color='#000' />

                <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#545252FF" style={styles.searchIcon} />
          <TextInput placeholder="Search" style={styles.inputStyl} />
        </View>

                <Image
                    style={styles.imgProf}
                    source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' }}
                />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    inputStyl: {
        width: '60%',
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
        paddingHorizontal: 10,
      },
      searchIcon: {
        marginRight: 5,
      },
    imgProf: {
        height: 40,
        width: 40,
        borderRadius: 100
    }
})