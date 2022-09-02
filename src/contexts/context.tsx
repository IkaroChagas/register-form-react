import { createContext, useReducer } from "react";
import { initialTheme, themeReducer, ThemeType } from "../reducers/theme";
import { UserType, userInitial, userReducer } from '../reducers/user'
import { reducerActionType } from '../types/reducerActionType'


type initialStateType = { // o contexto iniciará com o userType
    user: UserType[];
    theme: ThemeType
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>
}

type ContextProviderType = {
    children: React.ReactNode
}

const initialState = {
    user: userInitial,
    theme: initialTheme
}


export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({ // aqui eu chamo o estado inicial executando a ação typada no reducerActionType
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
});

export const ContextProvider = ({ children }: ContextProviderType) => {
    const [state, dispatch] = useReducer(mainReducer, initialState); // NUNCA esquecer useReducer é o hook e não userReducer.

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>

    ) // repassando os valores para dentro do children
}