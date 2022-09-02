import { useContext } from 'react';
import { Context } from '../../contexts/context';
import * as C from './styles'


type Props = {
    content?: string;
    onClick?: () => void;
    bgColorButton?: string;
    icon?: string;
}

export const Button = ({ content, onClick, bgColorButton, icon }: Props) => {
    return (
        <C.Button />
    );
}