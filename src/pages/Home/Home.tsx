import React, { useEffect, useState } from "react";
import { Container, ContainerHeader, Header, FlatList } from "./HomeStyle";
import api from "../../service/api";

import ListPopularMovies from "../../components/ListPopular/ListPopularMovies";

function Home():JSX.Element {

    const [listFilmesPopular, setListFilmesPopular] = useState([]);

    async function loadFilmsPopular() {
        const response = await api.get('discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc')
        .then(response => {
            setListFilmesPopular(response.data.results);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        loadFilmsPopular();
    }, [])
    
    return(
        <Container>
            <ContainerHeader>
                <Header>
                    Filmes Populares
                </Header>
            </ContainerHeader>
            
            <FlatList 
                data={listFilmesPopular}
                keyExtractor={(item:any) => item.id}
                renderItem={({item}:any) => <ListPopularMovies id={item.id} pathImage={item.poster_path}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
           
        </Container>
    );
}

export default Home;