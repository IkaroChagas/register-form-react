import * as C from './styles'

type Props = {
    type?: string
    placeholder?: string | number
    value?: string | number
    onChange?: (e: any) => void
}

export const Input = ({ }: Props) => {
    return (
        <C.Input />
    );
}