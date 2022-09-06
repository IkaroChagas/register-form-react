import React, { useState, useContext } from "react"
import { Context } from '../../contexts/context'
import * as C from './styles'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import SendImg from '../../images/accept.svg'


export const Home = () => {
    const { dispatch } = useContext(Context);

    const [nameInput, setNameInput] = useState<string>('');
    const [ageInput, setAgeInput] = useState<number>(0);
    const [emailInput, setEmailInput] = useState<string>('');


    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value)
    }

    const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeInput(parseInt(e.target.value))
    }

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value)
    }

    const handleAddNewUser = () => {
        if (nameInput && ageInput && emailInput) {
            dispatch({
                type: 'ADD_NEW',
                payload: {
                    name: nameInput,
                    age: ageInput,
                    email: emailInput
                }
            })
            // adicionando a condição de mensagens de alerta caso os campos estejam ou não preenchidos
            setNameInput('');
            setAgeInput(0);
            setEmailInput('')

            setTimeout(() => {
                alert('Usuário foi cadastrado com sucesso, verifique a lista de usuários')
            }, 150);
        } else {
            alert('Preencha os campos!')
        }

    }

    return (
        <C.Container>
            <C.H2>Formulário de cadastro</C.H2>
            <C.Form>

                <Input type="text" placeholder='Digite seu nome' value={nameInput === '' ? '' : nameInput} onChange={handleNameInput} />
                <Input type="number" placeholder='Digite sua idade' value={ageInput === 0 ? '' : ageInput} onChange={handleAgeInput} />
                <Input type="text" placeholder='Digite seu e-mail' value={emailInput === '' ? '' : emailInput} onChange={handleEmailInput} />
                <Button bgColorButton="#2f7bc1" icon={SendImg} onClick={handleAddNewUser} />

            </C.Form>
        </C.Container>
    )
}