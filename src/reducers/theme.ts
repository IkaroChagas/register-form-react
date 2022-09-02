import { reducerActionType } from "../types/reducerActionType";

export type ThemeType = {
    status: 'dark' | 'light';
    bgColor: '#333' | '#ddd';
    boxShadow: '0 0 10px #ddd' | '0 0 10px #333';
    color: '#fff' | '#333';
    bgColorTransparent: 'rgba(3,3,3,0.7)' | 'rgba(255,255,255,0.65)';
}

export const initialTheme: ThemeType = {
    status: 'dark',
    bgColor: '#333',
    boxShadow: '0 0 10px #ddd',
    color: '#fff',
    bgColorTransparent: 'rgba(3,3,3,0.7)'
}

export const themeReducer = (state: ThemeType, action: reducerActionType) => {
    switch (action.type) {
        case 'SWITCH_THEME':
            return {
                ...state,
                status: action.payload.status,
                bgColor: action.payload.bgColor,
                boxShadow: action.payload.boxShadow,
                color: action.payload.color
            }
            break
    }

    return state
}