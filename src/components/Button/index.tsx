import { useContext } from 'react';
import { Context } from '../../contexts/context';
import * as C from './styles'

type Props = {
    content?: string;
    bgColorButton: string;
    onClick?: () => void;
    icon?: any;
}

export const Button = ({ content, icon, bgColorButton, onClick }: Props) => {
    const { state } = useContext(Context);

    return (
        <C.Button onClick={onClick} bgColor={bgColorButton} themeOptions={state.theme}>
            {icon &&
                <C.ButtonIcon src={icon} />
            }
            {content}
        </C.Button>
    );
}
