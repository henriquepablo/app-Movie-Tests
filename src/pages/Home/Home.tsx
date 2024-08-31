import React from "react";
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