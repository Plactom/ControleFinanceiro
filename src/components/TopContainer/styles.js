import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    companyNameContainer: {
        position: 'absolute',
        height: 100,
        right: '25%',
        width: '50%',
        backgroundColor: '#ffe19d',
        alignItems: 'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
      },

      companyName: {
        flex: 1,
        fontSize: 30,
        paddingTop: 35
      },    
})

export default styles