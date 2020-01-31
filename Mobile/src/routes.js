import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './pages/Home/index'
import Recipes from './pages/Recipes/index'
import AddRecipe from './pages/Recipes/addRecipe'

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: HomePage,
            navigationOptions: {
                headerShown: false
            }
        },
        Recipes: {
            screen: Recipes,
            navigationOptions: {
                title: 'Receitas'
            }
        },
        AddRecipe: {
            screen: AddRecipe,
            navigationOptions: {
                title: 'Nova Receita'
            }
        }
    }, {
        defaultNavigationOptions: {

        }
    })
)

export default Routes