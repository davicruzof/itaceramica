import React from 'react'
import Input from '../../components/Input'
import { Container, Formulario, TextArea, Label, Botao, Title } from './style'

export default function Contato() {
    return (
        <Container>
            <Formulario action="mailto:daviondejesus@gmail.com">
                <Title>Contato</Title>
                <Input 
                    label="Nome" 
                    id="nome" 
                    placeholder="Digite o seu nome"
                />
                <Input 
                    type="email" 
                    label="Email" 
                    id="email" 
                    placeholder="Digite o seu email"
                />
                <Input 
                    label="Telefone" 
                    id="telefone" 
                    placeholder="Digite o seu telefone"
                />
                <Label>Mensagem</Label>
                <TextArea rows="5"name="mensagem" id="mensagem"
                placeholder="Digite a sua mensagem"></TextArea>
                <Botao type="submit" value="Enviar" />
            </Formulario>
        </Container>
    )
}
