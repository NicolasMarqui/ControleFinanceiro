import React from 'react';
import { Wrapper, Categoria, Icon, Valor, CategoriaText, ValorText} from './styles';

const ExpenseItem = ({ item }) => {

    const { total , categoria, date, title } = item;

    return(
        <Wrapper>
            <Categoria>
                <CategoriaText>
                    {title}
                </CategoriaText>
            </Categoria>
            <Valor>
                <ValorText>
                    {`R$-${total}`}
                </ValorText>
            </Valor>
        </Wrapper>
    )
}

export default ExpenseItem;