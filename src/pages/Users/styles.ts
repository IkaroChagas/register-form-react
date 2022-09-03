import styled from "styled-components";
import { ThemeType } from "../../reducers/theme";

type themeOptionsType = { themeOptions: ThemeType }

export const Container = styled.div``;

export const h2 = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`

export const UsersTable = styled.table`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const UserTheme = styled.div<themeOptionsType>`
    border-bottom: 1px solid ${props => props.themeOptions.color};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        padding: 5px;
    }
`;

export const TR = styled.tr`
    display: flex;
`;

export const BodyTheme = styled.tbody``;

export const theme = styled.th`
    width: 100%;
    padding: 5px 0;
`;

export const theme2 = styled.td`
     text-align: center;
     padding: 5px 0;
`;

export const ThemeIndex = styled.tr`
    display: flex;
    text-align: center;
    padding: 5px 0;
`;

export const ContentTable = styled.thead`
`;

export const BodyButtons = styled.div``

export const Edit = styled.div<themeOptionsType>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    padding: 10px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.themeOptions.bgColorTransparent};
    color: #fff;
`;

export const EditTitle = styled.span`
    font-size: 25px;
    margin-bottom: 20px;
`;

export const EditUser = styled.div`
    display: flex;
`;

export const Empty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EmptyText = styled.span`
    font-size: 22px;
`;