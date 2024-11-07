import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import BackHeader from '../../Components/Header/BackHeader'
import HomeServiceCard from '../../Components/Home/HomeServiceCard'
import ServiceListCard from '../../Components/Service/ServiceListCard'
import Icon from 'react-native-vector-icons/FontAwesome';

const ServiceList = () => {
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
      style={{
        flex: 1, backgroundColor: '#fff',
      }}>
      <BackHeader title='Service List' />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 10
        }}
        showsVerticalScrollIndicator={false}>

        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#545252FF" style={styles.searchIcon} />
          <TextInput placeholder="Search" style={styles.inputStyl} />
        </View>

        <Text
          style={styles.headingText}>
          Venue
        </Text>

        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15
          }}>
          {serviceArr.map((item, index) => (
            <ServiceListCard
              key={index}
              item={item}
            />
          ))}
        </View>

        <Text
          style={{
            marginTop: 15,
            ...styles.headingText
          }}>
          Tent
        </Text>

        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15
          }}>
          {serviceArr.map((item, index) => (
            <ServiceListCard
              key={index}
              item={item}
            />
          ))}
        </View>

        <Text
          style={{
            marginTop: 15,
            ...styles.headingText
          }}>
          Tent
        </Text>

        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15
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

export default ServiceList

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    color: '#000'
  },
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
})