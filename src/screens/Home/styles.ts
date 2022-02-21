import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#171717',
  },
  logo: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 32,
    color: colors.white,
    marginBottom: 32,
  },
})
