import React, { createContext, useReducer } from "react";
import {userType, userInitial, userReducer} from '../reducers/useReducer'
import {reducerActionType} from '../types/reducerActionType'

type initialStateType = { // o contexto iniciará com o userType
    user: userType[];
}

const initialState = { 
    user: userInitial
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>
}

type ContextProviderType = {
    children: React.ReactNode
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({ // aqui eu chamo o estado inicial executando a ação typada no reducerActionType
    user: useReducer(state.user, action)
});