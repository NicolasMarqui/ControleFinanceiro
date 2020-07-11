import styled from 'styled-components';

export const Title = styled.Text`
    font-size: ${props => props.fontSize ? props.fontSize : '20px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
    color: ${props => props.color ? props.color : '#000'};
    margin-top: ${props => props.negative ? '-15px' : 0};
`

export const TitleSmall = styled.Text`
    font-size: 15px;
    font-weight: 400;
    margin-top: -10px;
`

export const TitleLogin = styled.Text`
    font-size: 17px;
    font-weight: 400;
    color: #fff;
`