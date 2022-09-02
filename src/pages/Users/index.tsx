import { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Context } from "../../contexts/context";
import * as C from './styles'
import { UserType } from "../../reducers/user";

// Users que irá para as rotas
export const Users = () => {
    const { state, dispatch } = useContext(Context)

    const [edit, setEdit] = useState<boolean>(false);
    const [getId, setGetId] = useState<string>('');
    const [nameInput, setNameInput] = useState<string>('')
    const [ageInput, setAgeInput] = useState<number>(0)
    const [emailInput, setEmailInput] = useState<string>('')


    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value)
    }

    const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeInput(parseInt(e.target.value))
    }

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value)
    }

    // Ação de deletar usuário cadastrado através do ID gerado
    const handleDeleteUser = (id: string) => {
        dispatch({
            type: 'DELETE_USER',
            payload: { id }
        })
    }

    const handleEditUser = (item: UserType) => {
        setEdit(true) // aqui deixei a condição em verdadeiro para editar os dados

        setNameInput(item.name);
        setAgeInput(item.age);
        setEmailInput(item.email);
        setGetId(item.id)
    }

    const handleSaveUser = () => {
        dispatch({
            type: 'EDIT_USER',
            payload: {
                id: getId,
                name: nameInput,
                age: ageInput,
                email: emailInput
            }
        });

        setEdit(false) // aqui faz o inverso, ao invés de habilitar a edição, deixei em false ai so possibilida o salvamento dos dados
    }

    const handleCancel = () => setEdit(false); // Ação de cancelamento

    return (
        <C.Container>
            <C.h2>Usuários cadastrados</C.h2>
            {state.user[0] &&
                <C.UsersTable>
                    <C.UserTheme themeOptions={state.theme}>
                        <C.theme>Nome</C.theme>
                    </C.UserTheme>

                    <C.UserTheme themeOptions={state.theme}>
                        <C.theme>Idade</C.theme>
                    </C.UserTheme>

                    <C.UserTheme themeOptions={state.theme}>
                        <C.theme>E-mail</C.theme>
                    </C.UserTheme>

                    <C.UserTheme themeOptions={state.theme}>
                        <C.theme>Opções</C.theme>
                    </C.UserTheme>


                    <C.BodyTheme>
                        {state.user.map((item, index) => (
                            <>
                                <C.ThemeIndex key={index}>
                                    <C.UserTheme themeOptions={state.theme}>
                                        <C.theme2>{item.name}</C.theme2>
                                    </C.UserTheme>

                                    <C.UserTheme themeOptions={state.theme}>
                                        <C.theme2>{item.age}</C.theme2>
                                    </C.UserTheme>

                                    <C.UserTheme themeOptions={state.theme}>
                                        <C.theme2>{item.email}</C.theme2>
                                    </C.UserTheme>

                                </C.ThemeIndex>

                                <C.BodyButtons>
                                    <Button bgColorButton="#801515" onClick={() => handleDeleteUser(item.id)} />
                                    <Button bgColorButton="#0b1d70" onClick={() => handleEditUser(item)} />
                                </C.BodyButtons>
                            </>
                        ))}
                    </C.BodyTheme>
                </C.UsersTable>
            }

            {edit &&
                <>
                    <C.Edit themeOptions={state.theme}>

                        <C.EditTitle>Editar Cadastro</C.EditTitle>

                        <Input type="text" placeholder='Seu nome' value={nameInput} onChange={handleNameInput} />
                        <Input type="number" placeholder='Sua idade' value={ageInput} onChange={handleAgeInput} />
                        <Input type="text" placeholder='Seu e-mail' value={emailInput} onChange={handleEmailInput} />
                    </C.Edit>
                    <C.EditUser>
                        <Button content="Salvar" bgColorButton="#c8db5d" onClick={handleSaveUser} />
                        <Button content="Cancelar" bgColorButton="#7a3137" onClick={handleCancel} />
                    </C.EditUser>
                </>
            }
            {!state.user[0] &&
                <C.Empty>
                    <C.EmptyText>
                        Sem registros no momento!
                    </C.EmptyText>
                </C.Empty>
            }

        </C.Container>
    )

}