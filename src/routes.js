import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './pages/Home/index'
import Recipes from './pages/Recipes/index'

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: HomePage,
            navigationOptions: {
                headerShown: false
            }
        },
        Recipes: {
            screen: Recipes
        }
    }, {
        defaultNavigationOptions: {

        }
    })
)

export default Routes