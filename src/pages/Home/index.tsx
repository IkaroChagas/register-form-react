import { useState, useContext, ChangeEvent } from "react"
import { Context } from '../../contexts/context'
import * as C from './styles'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export const Home = () => {
    const { dispatch } = useContext(Context);

    const [nameInput, setNameInput] = useState<string>('')
    const [ageInput, setAgeInput] = useState<number>(0)
    const [emailInput, setEmailInput] = useState<string>()


    const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value)
    }

    const handleAgeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setAgeInput(parseInt(e.target.value))
    }

    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value)
    }

    const handleAddNewUser = () => {
        if (nameInput && ageInput && emailInput) {
            dispatch({
                type: 'ADD_USER',
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
            }, 200);
        } else {
            alert('Preencha os campos!')
        }
    }

    return (
        <C.Container>
            <C.h2>Formulário de cadastro</C.h2>
            <C.form>

                <Input type="text" placeholder='Digite seu nome' value={nameInput === '' ? '' : nameInput} onChange={handleNameInput} />
                <Input type="number" placeholder='Digite sua idade' value={ageInput === 0 ? '' : ageInput} onChange={handleAgeInput} />
                <Input type="text" placeholder='Digite seu e-mail' value={emailInput === '' ? '' : emailInput} onChange={handleEmailInput} />
                <Button content="content" onClick={handleAddNewUser} />

            </C.form>
        </C.Container>
    )
}