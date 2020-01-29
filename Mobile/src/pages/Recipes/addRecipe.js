import React, { useState } from 'react'
import { Text, View } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput/index'
import {StyledInput} from '../../components/CustomTextInput/styles'
import SubmitButton from '../../components/SubmitButton/index'
import { IncomeAmountContainer } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function AddRecipe() {
    const [value, setValue] = useState('0.00')

    return(
        <>
            <IncomeAmountContainer>
                <Text style={{ marginTop: 10 }} >Valor da Receita</Text>
                <Text style={{ fontSize: 25 }} > {`R$${value}`} </Text>
            </IncomeAmountContainer>


            <View style={{ marginTop: 80 }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <View style={{ marginLeft: 15, marginTop: 8 }} >
                        <MaterialIcons name={'add-shopping-cart'} size={20} color={'#727272'} />
                    </View>
                    <CustomTextInput placeholder={'Descrição'}/>
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
                position: "absolute", 
                bottom: 100, 
                alignItems: 'center' 
            }} >
                <SubmitButton/>
            </View>
        </>
    )
}