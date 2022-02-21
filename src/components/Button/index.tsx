import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'

import { styles } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
