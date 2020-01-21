import React, * as react from 'react'
import { View, StyleSheet } from 'react-native'

import TopContainer from '../../components/TopContainer/index'
import TopContainerStyle from '../../components/TopContainer/styles'
import DataContainer from '../../components/DataContainer/index'
import DataContainerStyle from '../../components/DataContainer/styles'
import FooterContainer from '../../components/FooterContainer/index'
import { MaterialIcons } from '@expo/vector-icons'
import { 
  DashboardContainer, 
  CurrentBalanceTitle, 
  CurrentBalance, 
  TrendingUpButton, 
  TrendingIcon, 
  TrendingTitle,
  TrendingContainer, 
  TrendingDownButton
} from './styles'



export default function Home({ navigation }) {
  return(
    <>
    <View style={ styles.mainContainer }>
      <DataContainer style={ DataContainerStyle.dataContainer } />
      <DashboardContainer>

        <CurrentBalanceTitle>Saldo</CurrentBalanceTitle>
        <CurrentBalance>R$1000</CurrentBalance>

        <TrendingContainer>
          <TrendingUpButton onPress={ () => {
            navigation.navigate('Recipes')
          }}>
            <TrendingIcon color="#02a229">
              <MaterialIcons name="keyboard-arrow-up" size={25}/>
            </TrendingIcon>
            <TrendingTitle>Receitas</TrendingTitle>
          </TrendingUpButton>

          <TrendingDownButton>
            <TrendingIcon color="tomato">
              <MaterialIcons name="keyboard-arrow-down" size={25}/>
            </TrendingIcon>
            <TrendingTitle>Despesas</TrendingTitle>
          </TrendingDownButton>
        </TrendingContainer>

      </DashboardContainer>
      <TopContainer style={ TopContainerStyle.companyNameContainer } />
      <FooterContainer />
    </View>
    </>
  )
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#f4c430',
  },

})