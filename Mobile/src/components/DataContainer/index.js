import React, * as react from 'react'
import { View } from 'react-native'

export default class DataContainer extends react.Component {
    render() {
        return(
            <View style={ this.props.style } />
        )
    }
}