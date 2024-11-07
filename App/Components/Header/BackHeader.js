import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BackHeader = ({ title = '', add = false }) => {
    const navigation = useNavigation()
    return (
        <>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    marginHorizontal: 15
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <Pressable
                        onPress={() => navigation.goBack()}>
                        <Icon
                            name='chevron-small-left'
                            size={35}
                            color='#000'
                        />
                    </Pressable>
                    <Text
                        style={{
                            marginLeft: 5,
                            fontWeight: 'medium',
                            fontSize: 15,
                            color: '#000'
                        }}>
                        {title}
                    </Text>
                </View>

                {add ?
                    <Pressable
                        onPress={() => navigation.navigate(add)}
                        style={styles.plusBox}>
                        <AntDesign
                            name='plus'
                            size={20}
                            color='#000'
                        />
                    </Pressable>
                    :
                    null}

            </View>
        </>
    )
}

export default BackHeader

const styles = StyleSheet.create({
    plusBox: {
        borderWidth: 1,
        borderRadius: 20,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})