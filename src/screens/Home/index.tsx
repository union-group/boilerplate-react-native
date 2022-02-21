import React from 'react'
import { View, Image, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Button } from '../../components/Button'

import { styles } from './styles'

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.text}>
        Hello World {'\n'}
        Union Group
      </Text>
      <Button title="Next page" />
    </View>
  )
}
