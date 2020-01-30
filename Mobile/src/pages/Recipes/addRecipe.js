import React, { useState } from 'react'
import { Text, View, KeyboardAvoidingView } from 'react-native'
import {StyledInput} from '../../components/CustomTextInput/styles'
import { SubmitButton } from '../../components/SubmitButton/styles'
import { IncomeAmountContainer } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import currencyFormatter from 'currency-formatter'

import api from '../../services/api'

export default function AddRecipe() {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState()

    async function addNewRecipe() {
        const post = await api.post('./addrecipe', {
            description,
            value
        })
    }

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior = "padding">
            <IncomeAmountContainer>
                <Text style={{ marginTop: 10 }} >Valor da Receita</Text>
                <Text style={{ fontSize: 25 }} > {`${currencyFormatter.format(Number(value), { locale: 'pt-BR' })}`} </Text>
            </IncomeAmountContainer>


            <View style={{ marginTop: 80 }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <View style={{ marginLeft: 15, marginTop: 8 }} >
                        <MaterialIcons name={'add-shopping-cart'} size={20} color={'#727272'} />
                    </View>
                    <View style={{ alignItems: "center", padding: 15, flex: 1 }}>
                        <StyledInput value={description} placeholder={'Descrição'} onChangeText={setDescription} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <View style={{ marginLeft: 15, marginTop: 8 }} >
                        <MaterialIcons name={'attach-money'} size={20} color={'#727272'} />
                    </View>
                    <View style={{ alignItems: "center", padding: 15, flex: 1 }}>
                        <StyledInput keyboardType={'numeric'} placeholder={'Valor'} onChangeText={setValue} />
                    </View>
                </View>
            </View>

            <View style={{ 
                width: '100%', 
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 100,
                alignItems: 'center',
            }} >
            <SubmitButton onPress={addNewRecipe} >
                <MaterialIcons name="done" size={25} color={'#FFF'} />
            </SubmitButton>
            </View>
        </KeyboardAvoidingView>
    )
}