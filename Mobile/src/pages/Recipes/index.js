import React, { useEffect, useState } from 'react'
import { RecipeContainer, RecipeValueContainer } from './styles'
import { Text, View } from 'react-native'
import AddButton from '../../components/AddButton/index'
import currencyFormatter from 'currency-formatter'
import api from '../../services/api'

export default function Recipes({ navigation }) {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        async function loadRecipes() {
            const allRecipes = await api.get('/recipes')
            setRecipes(allRecipes.data)
        }
        loadRecipes()
    }, [])

    return(
        <>
            {recipes.map( recipe => (
                <View key={recipe._id}>
                    <RecipeContainer>
                        <Text style={{ paddingLeft: 10 }}>
                            {recipe.description}
                        </Text>
                        <RecipeValueContainer>
                            <Text style={{ paddingRight: 10 }}>
                                {`${currencyFormatter.format(Number(recipe.value), { locale: 'pt-BR' })}`}
                            </Text>
                        </RecipeValueContainer>
                    </RecipeContainer>
                </View>
            ))}


            <View style={{ right: 20, bottom: 20, position: "absolute" }} >
                <AddButton navigate={ () => { navigation.navigate('AddRecipe') }} />
            </View>
        </>
    )
}