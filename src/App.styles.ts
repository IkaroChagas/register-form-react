import styled from "styled-components";
import { ThemeType } from "./reducers/theme";

type ThemeOptionsType = {
    themeOptions: ThemeType
}

export const Body = styled.div <ThemeOptionsType>`
    background-color: ${(props: { themeOptions: { bgColor: any; }; }) => props.themeOptions.bgColor};
    color: ${(props: { themeOptions: { color: any; }; }) => props.themeOptions.color};
    min-height: 100vh;

    a {
        color: ${(props: { themeOptions: { color: any; }; }) => props.themeOptions.color};
    }
`;

export const Header = styled.header`
    display: flex;   
    flex-direction: column;   
`;

export const Logo = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const LogoText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 40px;
    margin-top: 40px;
    font-family: sans-serif;
`;

export const Theme = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;

export const ThemeContainer = styled.div`
    background-color: #fff;    
    width: 40px;
    height: 15px;
    border-radius: 20px;
    display: flex;
    margin: -90px;
    align-items: center;
    position: relative;
    cursor: pointer; 
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
    margin: 20px 0;
`;

export const Footer = styled.footer`
    text-align: center;
    margin-bottom: 10px;
`;

export const Link = styled.a``;
