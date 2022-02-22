/* eslint-disable react/style-prop-object */
import React from 'react'
import { View, Image, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../components/Button'

import { NavigationProps } from '../../routes/types/navigation'

import { styles } from './styles'

export const Home = () => {
  const navigation = useNavigation<NavigationProps>()

  function handleNextPage() {
    navigation.navigate('Example')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.text}>
        Hello World {'\n'}
        Union Group
      </Text>
      <Button title="Next page" onPress={handleNextPage} />
    </View>
  )
}
