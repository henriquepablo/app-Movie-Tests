import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View `
    flex: 1;
    background-color: ${theme.colors.background};
`;

export const ContainerHeader = styled.View `
    margin-top: 50px;
    margin-left: 20px;
    margin-bottom: 20px;
`;

export const Header = styled.Text `
    color: ${theme.colors.title};
    font-size: 28px;
    font-family: ${theme.fonts.fontBody};
    
`;