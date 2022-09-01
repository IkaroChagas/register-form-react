import { useContext } from 'react';
import { Context } from '../../contexts/context';
import * as C from './styles'


type Props = {
    content?: string;
    onClick?: () => void;
}

export const Button = ({ content, onClick }: Props) => {
    return (
        <C.Button />
    );
}