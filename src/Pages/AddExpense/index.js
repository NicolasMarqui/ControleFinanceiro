import React, { useEffect, useState } from 'react';
import { Wrapper, SpaceHeader, TitleArea, Group, SaveButton, Label, Input, FormArea, SpaceTitle, Picker, ShowDate} from './styles';
import { Title } from '../../GlobalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Categories from '../../Data/Categories';

const AddExpense = () => {

    const [ amount , setAmount ] = useState('');
    const [ title , setTitle ] = useState('');
    const [ allDespesas, setAllDespesas ] = useState([])
    const [ currentUser, setCurrentUser ] = useState('');
    const [ selectedValue, setSelectedValue ] = useState('');
    const [ date , setDate ] = useState(new Date());
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        getUserName();
        getAllDespesas();
    }, []);

    const getUserName = async () => {
        await AsyncStorage.getItem('user')
            .then(user => {
                const { usuario } = JSON.parse(user);
                setCurrentUser(usuario);
            })
    }

    const getAllDespesas = async () => {
        await AsyncStorage.getItem('todos')
            .then(todo => {
                setAllDespesas(JSON.parse(todo))
            })
    }

    function guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showToast = (msg) => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER)
    }

    const saveNewExpense = async () => {
        if((!amount || amount < 0) || title === '' ){
            showToast('Verifique os valores inseridos');
            return false;
        }

        const newDespesa = {
            id: guidGenerator(),
            title: title,
            total: amount,
            categoria: selectedValue,
            date,
            belongsTo: currentUser
        }

        const withNewDespesa = [...allDespesas || [], newDespesa]
        
        await AsyncStorage.setItem('despesas', JSON.stringify(withNewDespesa) )
            .then(d => {
                showToast('Despesa adicionada com sucesso')
            })
            .catch(err => {
                showToast('Erro ao adicionar despesa')
                setAmount('');
            })
    }

    return (
        <Wrapper>
            <SpaceHeader></SpaceHeader>
            <TitleArea>
                <Title fontSize="30px">Adicionar</Title>
                <SpaceTitle></SpaceTitle>
                <Title fontSize="30px" fontWeight="700">Despesa</Title>
            </TitleArea>

            <FormArea>
                <Group>
                    <Label>Título</Label>
                        <Input 
                            value={title}
                            onChangeText={(title) => setTitle(title)}
                            placeholder={"Título"}
                        />
                </Group>
                <Group>
                    <Label>Valor</Label>
                        <Input 
                            keyboardType="numeric"
                            value={amount}
                            onChangeText={(total) => setAmount(total)}
                            placeholder={"Valor"}
                        />
                </Group>
                <Group>
                    <Label>Categoria</Label>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            {
                                Categories.map(c => (
                                    <Picker.Item label={c.title} value={c.title.toLowerCase()}/>
                                ))
                            }
                        </Picker>
                </Group>
                <Group>
                    <Label>Data</Label>
                    <ShowDate onPress={() => setShow(true)}>
                        <Title fontSize="15px">
                            {` ${date.getFullYear()}`}
                        </Title>
                    </ShowDate>
                </Group>
                <SaveButton onPress={saveNewExpense}>
                    <Title color="#fff" fontWeight="700">
                        + Salvar Despesa
                    </Title>
                </SaveButton>
            </FormArea>

            {
                show &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDate}
                />
            }
        </Wrapper>
    );
}

export default AddExpense;