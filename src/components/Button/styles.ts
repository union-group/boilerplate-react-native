import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    height: 56,
    borderRadius: 16,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
})
