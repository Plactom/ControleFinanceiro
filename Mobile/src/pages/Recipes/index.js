import React from 'react'
import { RecipeContainer, RecipeValueContainer } from './styles'
import { Text, View } from 'react-native'
import AddButton from '../../components/AddButton/index'

export default function Recipes({ navigation }) {
    return(
        <>
            <RecipeContainer>
                <Text style={{ paddingLeft: 10 }}>Roupa xyz</Text>
                <RecipeValueContainer>
                    <Text style={{ paddingRight: 10 }}>R$20.00</Text>
                </RecipeValueContainer>
            </RecipeContainer>

            <RecipeContainer>
                <Text style={{ paddingLeft: 10 }}>Roupa xyz</Text>
                <RecipeValueContainer>
                    <Text style={{ paddingRight: 10 }}>R$20.00</Text>
                </RecipeValueContainer>
            </RecipeContainer>

            <RecipeContainer>
                <Text style={{ paddingLeft: 10 }}>Roupa xyz</Text>
                <RecipeValueContainer>
                    <Text style={{ paddingRight: 10 }}>R$20.00</Text>
                </RecipeValueContainer>
            </RecipeContainer>

            <RecipeContainer>
                <Text style={{ paddingLeft: 10 }}>Roupa xyz</Text>
                <RecipeValueContainer>
                    <Text style={{ paddingRight: 10 }}>R$20.00</Text>
                </RecipeValueContainer>
            </RecipeContainer>

            <View style={{ right: 20, bottom: 20, position: "absolute" }} >
                <AddButton/>
            </View>
        </>
    )
}