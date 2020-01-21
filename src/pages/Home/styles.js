import styled from 'styled-components/native'

export const DashboardContainer = styled.View`
    position: absolute;
    align-items: center;
    margin-top: 100;
    width: 100%;
    height: 27%;
`

export const CurrentBalanceTitle = styled.Text`
    top: 3%;
    font-size: 15;
    color: #455A64;
`

export const CurrentBalance = styled.Text`
    top: 1%;
    font-size: 35;
`

export const TrendingContainer = styled.View`
    width: 100%;
    height: 70%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const TrendingUpButton = styled.TouchableOpacity`
    flex-direction: row;
    width: 50%;
    height: 30%;
    align-items: center;
    margin-top: 40;
    justify-content: center;
`

export const TrendingDownButton = styled.TouchableOpacity`
    flex-direction: row;
    width: 50%;
    height: 30%;
    align-items: center;
    margin-top: 40;
    justify-content: center;
`

export const TrendingIcon = styled.View`
    position: relative;
    border-radius: 100;
    width: 40;
    height: 40;
    background-color: ${props => props.color};
    justify-content: center;
    align-items: center;
`

export const TrendingTitle = styled.Text`
    position: relative;
    font-size: 15;
    font-weight: bold;
    color: #37474F;
    padding-left: 10;
`
