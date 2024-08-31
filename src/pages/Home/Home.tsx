import React from "react";
import { Text, View } from "react-native";
import { Container, ContainerHeader, Header } from "./HomeStyle";

function Home():JSX.Element {
    return(
        <Container>
            <ContainerHeader>
                <Header>
                    Filmes Populares
                </Header>
            </ContainerHeader>
        </Container>
    );
}

export default Home;