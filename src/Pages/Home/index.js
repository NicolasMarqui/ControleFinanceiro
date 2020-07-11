import React, { useState, useEffect} from 'react';
import { Wrapper, TitleArea, TotalBalance, LatestExpenses, RoundedBox, SmallCifrao, Description, TitleRow, DescriptionWrapper, Divider} from './styles';
import { Title } from '../../GlobalStyles';
import AsyncStorage from '@react-native-community/async-storage';

import ExpenseList from '../../Components/ExpenseList';
import ExpenseItem from '../../Components/ExpenseItem';

const Home = () => {

    const [ currentUser, setCurrentUser ] = useState('');
    const [ allDespesas, setAllDespesas ] = useState([]);
    const [ loadingDespesas, setLoadingDespesas ] = useState(true);
    const VECTOR = require('../../../assets/vector.png');

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
        await AsyncStorage.getItem('despesas')
            .then(des => {
                setAllDespesas(JSON.parse(des))
                setLoadingDespesas(false);
            })
    }

    return (
        <Wrapper>
            <TitleArea>
                
                <TitleRow>
                    <Title fontSize="25px">
                        Bem Vindo
                    </Title>

                    <Divider></Divider>

                    <Title fontSize="25px" fontWeight={700}>
                        { currentUser ? currentUser : 'usuário' }
                    </Title>
                </TitleRow>

                <DescriptionWrapper>
                    <Description>
                        Insira sua despesas a baixo e fique mais rico poar.
                    </Description>
                </DescriptionWrapper>
            </TitleArea>

            <TotalBalance>
                <RoundedBox source={VECTOR} resizeMode="cover">
                    <SmallCifrao>
                        R$
                    </SmallCifrao>
                    <Title fontSize="55px" color="#fff" fontWeight={300}>
                        7500
                    </Title>
                </RoundedBox>
            </TotalBalance>

            <LatestExpenses>
                <Title>
                    Últimas despesas
                </Title>

                <ExpenseList>
                    {
                        !loadingDespesas && allDespesas && allDespesas.length > 0 ?

                        allDespesas.map(d => (
                            <ExpenseItem key={d.id} item={d}/>
                        ))

                        :

                        <Title>
                            Error
                        </Title>
                    }
                </ExpenseList>
            </LatestExpenses>
        </Wrapper>
    );
}

export default Home;