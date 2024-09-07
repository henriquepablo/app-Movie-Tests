import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const  Container = styled.View`
    background-color: '#292B37';
    border-radius: 10px;
    width: 200px;
    height: 390px;
    margin-left: 20px;
`;  

export const Image = styled.Image`
    height: 260px;
    width: 200px;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;

export const Body = styled.View`
    background-color: #0F111D;
    width: 200px;
    height: 127px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
    padding-bottom: 0;
`;

export const Text = styled.Text`
    color: ${theme.colors.title};
    font-size: 20px;
    margin-bottom: 15px;
    font-family: 'Montserrat-Bold';
`;

export const Horizontal = styled.View`
    gap: 10px;
    flex-direction: row;
`;