import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const ScrollView = styled.ScrollView`
    flex: 1;
    background-color: #0F111D;
`

export const Container = styled.View`
    flex: 1;
`;

export const ContainerImage = styled.View``;

export const Image = styled.Image`
    height: 600px;
    width: '100%';
`;

export const ButtonBack = styled.TouchableOpacity`
    position: absolute;
`;

export const ContainerButton = styled.View`
    border-radius: 50px;
    width: 50px;
    height: 50px;
    background-color: ${theme.colors.background};
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-left: 20px;
`;

export const ContainerTitle = styled.View`
    margin-left: 20px;
    margin-top: 20px;
`;

export const Horizontal = styled.View<{value: boolean, space: number, gap: number}>`
    justify-content: ${(props) => props.value ? 'space-between' : ''};
    align-items: center;
    flex-direction: row;
    margin-right: ${(props) => props.space}px;
    gap: ${(props) => props.gap}px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 23px;
    font-family: ${theme.fonts.fontBody};
`;

export const Genres = styled.Text`
    margin-top: 5px;
    color: #979797;
    font-weight: bold;
    font-size: 18px;
`;

export const ContainerSinopse = styled.View`
    margin-left: 20px;
    margin-right: 20px;
`;

export const Sinopse = styled.Text`
    text-align: justify;
    color: ${theme.colors.title};
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
`;

export const Center = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ContainerPlayer = styled.View`
    width: 330px;
    border-radius: 20px;
    background-color: ${theme.colors.background};
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 15px;
`;

export const TextTrailer = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 19px;
`;