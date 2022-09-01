import * as C from './styles'

type Props = {
    type?: string
    placeholder?: string | number
    value?: string | number
    onChange?: (e: any) => void
}

export const Input = ({ type, placeholder, value, onChange }: Props) => {
    return (
        <C.Input />
    );
}