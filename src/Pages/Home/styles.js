import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding: 40px 20px 0;
    background-color: #fff;
`

export const TitleArea = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px;
`

export const Description = styled.Text`
    font-size: 16px;
    color: #000000;
    font-weight: 300;
`

export const SmallCifrao = styled.Text`
    font-size: 15px;
    color: #fff;
    position: absolute;
    left: 20px;
    top: 36%;
`

export const TotalBalance = styled.View`
    flex: 1.2;
    width: 100%;
    padding: 0 7px;
`

export const TitleRow = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`

export const Divider = styled.View`
    width: 5px;
`

export const DescriptionWrapper = styled.View`
    flex: 1;
    margin-top: -12px;
`

export const LatestExpenses = styled.ScrollView`
    flex: 4;
    width: 100%;
    padding: 0 20px;
    margin-top: 25px;
`

export const RoundedBox = styled.ImageBackground`
    flex: 1;
    background-color: #30b8a6;
    border-radius: 27px;
    justify-content: center;
    padding: 0 0 0 40px;
    align-items: flex-start;
`