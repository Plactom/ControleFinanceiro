import React from 'react'
import { Text, View } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput/index'
import SubmitButton from '../../components/SubmitButton/index'
import { IncomeAmountContainer } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function AddRecipe() {
    return(
        <>
            <IncomeAmountContainer>
                <Text style={{ marginTop: 10 }} >Valor da Receita</Text>
                <Text style={{ fontSize: 25 }} >R$0,00</Text>
            </IncomeAmountContainer>
            <View style={{ marginTop: 80 }} >
                <View>
                    <MaterialIcons name={'add-shopping-cart'} size={25} />
                    <CustomTextInput placeholder={'Descrição'} />
                </View>
                <View>
                    <CustomTextInput keyboardType={'numeric'} placeholder={'Valor'} />
                </View>
            </View>
            <View style={{ 
                width: '100%', 
                position: "absolute", 
                bottom: 100, 
                alignItems: 'center' 
            }} >
                <SubmitButton/>
            </View>
        </>
    )
}