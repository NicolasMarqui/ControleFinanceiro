import React from 'react';
import styled from 'styled-components';

const ExpenseList = ({ children }) => {
    return(
        <Container>
            { children }
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`

export default ExpenseList;