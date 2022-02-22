import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#171717',
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    fontFamily: fonts.bold,
    textAlign: 'center',
    fontSize: 32,
    color: colors.white,
    marginBottom: 32,
  },
})
