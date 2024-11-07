import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../Components/Header/HomeHeader'
import HomeServiceCard from '../../Components/Home/HomeServiceCard'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
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
      style={{ backgroundColor: '#fff', flex: 1 }}>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 15
        }}
      >
        <Image
          style={styles.imageBanner}
          source={{ uri: 'https://images.unsplash.com/photo-1486591978090-58e619d37fe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fHww' }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 15,
            color: '#000'
          }}>
          Services
        </Text>

        <View
          style={styles.rowView}>
          <Text
            style={styles.headingText}>
            Venue
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ServiceList')}>
            <Text
              style={styles.seeAllText}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          {serviceArr.map((item, index) => (
            <HomeServiceCard
              key={index}
              item={item}
            />
          ))}
        </ScrollView>

        <View
          style={styles.rowView}>
          <Text
            style={styles.headingText}>
            Tent
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ServiceList')}>
            <Text
              style={styles.seeAllText}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          {serviceArr.map((item, index) => (
            <HomeServiceCard
              key={index}
              item={item}
            />
          ))}
        </ScrollView>

        <View
          style={styles.rowView}>
          <Text
            style={styles.headingText}>
            Event
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ServiceList')}>
            <Text
              style={styles.seeAllText}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          {serviceArr.map((item, index) => (
            <HomeServiceCard
              key={index}
              item={item}
            />
          ))}
        </ScrollView>

      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  imageBanner: {
    height: 200,
    borderRadius: 15,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  headingText: {
    fontSize: 15,
    fontWeight: 'medium',
    color: '#000'
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000'
  }
})