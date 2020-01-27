import React from 'react'
import { AddButtonContainer } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function AddButton() {
    return(
        <>
            <AddButtonContainer>
                <MaterialIcons name="add" size={25} color="#FFF" />
            </AddButtonContainer>
        </>
    )
}