import { v4 as uuidv4 } from 'uuid';
import { reducerActionType } from '../types/reducerActionType';

export type UserType = {
    id: string;
    name: string;
    age: number;
    email: string;
}

export const userInitial: UserType[] = [] // exportando o usertype como array vazio

export const userReducer = (state: UserType[], action: reducerActionType) => {
    switch (action.type) {
        case 'ADD_NEW':
            if (action.payload.name && action.payload.age && action.payload.email) {
                const cloneState = [...state] // criei a variável para receber o clone de state
                cloneState.push({
                    id: uuidv4(),
                    name: action.payload.name,
                    age: action.payload.age,
                    email: action.payload.email
                })
                return cloneState

            }
            break
        case 'EDIT_USER':
            if (action.payload.id) {
                const cloneState = [...state]

                const index = cloneState.findIndex(item => item.id === action.payload.id); // método findIndex() para encontrar o ID cadastrado
                if (index !== -1) {
                    cloneState[index].name = action.payload.name;
                    cloneState[index].age = action.payload.age;
                    cloneState[index].email = action.payload.email;
                }
                return cloneState
            }
            break
        case 'DELETE_USER':
            if (action.payload.id) {
                const cloneState = [...state];

                const newState = cloneState.filter(item => item.id !== action.payload.id); // filtrando o id, se for diferente da carga do reducerActionType, poderá deletar o usuário e retornar 
                return newState;
            }
            break
    }

    return state
}

