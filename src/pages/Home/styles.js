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

export const TrendingButtonContainer = styled.Button`
    position: absolute;
    top: 50;
    left: 10;
    flex-direction: row;
    width: 50%;
    height: 30%;
    align-items: center;
`

export const TrendingUpIcon = styled.Image`
    position: relative;
    border-radius: 100;
    width: 40;
    height: 40;
    background-color: ${props => props.color};
`

export const TrendingTitle = styled.Text`
    position: relative;
    font-size: 15;
    font-weight: bold;
    color: #37474F;
`
