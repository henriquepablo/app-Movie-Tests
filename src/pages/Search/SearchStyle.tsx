import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
`;

export const ContainerInput = styled.View`
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    width: 90%;
    border-radius: 10px;
    height: 55px;
    background-color: #FFF;
    color: #000;
    font-size: 16px;
    font-family: 'Montserrat-Bold';
    padding-left: 40px;
`;

export const ViewIcon = styled.View`
    position: absolute;
    left: 30px;
`;