import React from 'react'
import { View } from 'react-native'
import { StyledInput } from './styles'

export default function CustomTextInput( props ) {
    return(
        <View style={{ alignItems: "center", padding: 15, flex: 1 }} >
            <StyledInput keyboardType={ props.keyboardType } placeholder={ props.placeholder} />
        </View>
    )
}