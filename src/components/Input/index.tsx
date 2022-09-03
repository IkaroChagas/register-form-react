import * as C from './styles'

type Props = {
    type: string
    placeholder: string
    value: string | number
    onChange: (e: any) => void
}

export const Input = ({ type, placeholder, value, onChange }: Props) => {
    return (
        <C.Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    );
}