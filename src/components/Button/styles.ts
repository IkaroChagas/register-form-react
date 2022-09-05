import styled from "styled-components";
import { ThemeType } from "../../reducers/theme";

type ButtonType = {
    bgColor: string
    themeOptions: ThemeType;
}

export const Button = styled.div<ButtonType>`
    display: inline-flex;
    align-items: center;
    border-radius: 10px;
    background-color: ${props => props.bgColor};
    font-size: 18px;
    cursor: pointer;
    margin:  0 4px;
    margin-top: 20px;
    width: 115px;
    height: 50px;
    padding: 10px 3px;
    transition: all ease .5s;

    @media (max-width: 414px) {
        padding: 5px 3px;
    }
`;

export const ButtonIcon = styled.img`
    width: 30px;
    margin: auto;
    height: 30px;
    object-fit: contain;
`;