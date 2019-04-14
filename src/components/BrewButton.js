import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #4d4dff;
    border-color: #3333ff;
    color: #fff;
    &:active {
        background-color: #3333ff;
    }
`;

const BrewButton = props => {
    return (
        <Button>Brew</Button>
    );
};

export default BrewButton;