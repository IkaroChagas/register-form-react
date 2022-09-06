import styled from "styled-components";
import { ThemeType } from "./reducers/theme";
import LogoImg from './images/logo.png'

type ThemeOptionsType = {
    themeOptions: ThemeType
}

export const Body = styled.div <ThemeOptionsType>`
    background-color: ${(props: { themeOptions: { bgColor: any; }; }) => props.themeOptions.bgColor};
    color: ${(props: { themeOptions: { color: any; }; }) => props.themeOptions.color};
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: 60%;
    background-size: cover;

    a {
        color: ${(props: { themeOptions: { color: any; }; }) => props.themeOptions.color};
    }
    
    @media(max-width: 414px) {
        margin: auto;
        align-items: center;
        text-align: center;
        overflow-x: hidden;
    }
`;

export const Header = styled.header`
    display: flex;   
    flex-direction: column;   
`;

export const Logo = styled.div`    
    display: flex;
    align-items: center;
`;

export const LogoText = styled.image`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 182px;
    width: 200px;
    background-size: cover;
    background-image: url(${LogoImg});
    border-radius: 10px;
    font-family: sans-serif;
    margin-top: 5px;
`;

export const Theme = styled.div`
    display: flex;
    align-items: center;
`;

export const ThemeContainer = styled.div`
    background-color: #fff;    
    width: 40px;
    height: 15px;
    border-radius: 20px;
    display: flex;
    margin: -100px;
    align-items: center;
    position: relative;
    cursor: pointer; 

    @media(max-width: 414px) {
        margin: -60px;
    }
`;

export const ThemeCircle = styled.div<ThemeOptionsType>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.themeOptions.bgColor};
    position: absolute;    
    right: ${props => props.themeOptions.status === 'dark' ? '20px' : '0'};
    left: ${props => props.themeOptions.status === 'light' ? '20px' : '0'};
    border: 1px solid ${props => props.themeOptions.color};
    transition: all ease .5s;
`;

export const Menu = styled.div`
    div {
        margin: 20px;  
        margin-right: 15px;
    }
`;

export const Line = styled.div`
    margin: 0;
    padding: 10px;
`;

export const Footer = styled.footer`
    text-align: center;
    align-items: center;
    margin-top: 10px;
   
   @media(max-width: 414px) {
        margin: 15px;
   }
`;

export const Link = styled.a`
`;
