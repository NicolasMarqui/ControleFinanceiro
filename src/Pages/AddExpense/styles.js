import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    padding: 0 40px;
    background-color: #fff;
`

export const Title = styled.Text`
    font-size: 20px;
`

export const SpaceHeader = styled.View`
    height: 20px;
`

export const TitleArea = styled.View`
    padding: 20px 0;
    flex-direction: row;
    align-items: flex-end;
    flex: 1;
`

export const FormArea = styled.View`
    flex: 4;
    justify-content: space-evenly;
    align-items: center;
`

export const Group = styled.View`
    width: 100%;
    flex-direction: column;
`

export const SaveButton = styled.TouchableOpacity`
    width: 100%;
    background-color: #e9c33e;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`

export const Label = styled.Text`
    font-size: 14px;
    color: #222;
`

export const Input = styled.TextInput`
    padding: 10px;
    background-color: #ECF8F8;
    width: 100%;
    border-radius: 15px;
    margin: 5px 0 0;
`

export const Picker = styled.Picker`
    padding: 10px;
    background-color: #ECF8F8;
    width: 100%;
    border-radius: 15px;
    margin: 5px 0 0;
`

export const SpaceTitle = styled.View`
    width: 5px;
`

export const ShowDate = styled.TouchableOpacity`
    padding: 20px;
    background-color: #ECF8F8;
    width: 100%;
    border-radius: 15px;
    margin: 5px 0 0;
`