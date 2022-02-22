import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

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
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.white,
  },
})
