import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size:14px;
    color: #555;
`;

const Campo = styled.input`
    border-radius: 4px;
    background: transparent;
    border: 1px solid #818181;
    height: 40px;
    padding-left: 15px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const Input = ({label, placeholder,id, type = 'text',...props}) => {
  return (
      <Container>
        <Label>{label}</Label>
        <Campo type={type} name={id} id={id} placeholder={placeholder} {...props}/>
      </Container>
  );
}

export default Input;