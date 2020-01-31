import React, * as react from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default class TopContainer extends react.Component {
    render() {
        return(
        <View style={ this.props.style }>
            <Text style={ styles.companyName } >
                Bazart
            </Text>
        </View>
        )
    }
}


