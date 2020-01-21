import React, * as react from 'react'
import { View, StyleSheet } from 'react-native'

import TopContainer from '../../components/TopContainer/index'
import TopContainerStyle from '../../components/TopContainer/styles'
import DataContainer from '../../components/DataContainer/index'
import DataContainerStyle from '../../components/DataContainer/styles'
import FooterContainer from '../../components/FooterContainer/index'
import { DashboardContainer, CurrentBalanceTitle, CurrentBalance, TrendingButtonContainer, TrendingUpIcon, TrendingTitle } from './styles'



export default function Home({ navigation }) {
  return(
    <>
    <View style={ styles.mainContainer }>
      <DataContainer style={ DataContainerStyle.dataContainer } />
      <DashboardContainer>

        <CurrentBalanceTitle>Saldo</CurrentBalanceTitle>
        <CurrentBalance>R$1000</CurrentBalance>

        <TrendingButtonContainer title="" >
          <TrendingUpIcon color="#02a229"/>
          <TrendingTitle>Receitas</TrendingTitle>
        </TrendingButtonContainer>
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