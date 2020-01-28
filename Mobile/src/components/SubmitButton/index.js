import React from 'react'
import { SubmitButtonContainer } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function SubmitButton( props ) {
    return(
        <>
            <SubmitButtonContainer onPress={ props.navigate } >
                <MaterialIcons name="done" size={25} color={'#FFF'} />
            </SubmitButtonContainer>
        </>
    )
}