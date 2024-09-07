import React, { useEffect, useState } from "react";
import { Container, ContainerHeader, Header, FlatList } from "./HomeStyle";
import api from "../../service/api";

import ListPopularMovies from "../../components/ListPopular/ListPopularMovies";
import ListTopRatedFilms from "../../components/ListTopRatedFilms/ListTopRatedFilms";
import { ScrollView } from "react-native";

function Home():JSX.Element {

    const [listFilmesPopular, setListFilmesPopular] = useState([]);
    const [listFilmsRated, setListFilmsRated] = useState([]);

    async function loadFilmsPopular() {
        const response = await api.get('discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc')
        .then(response => {
            setListFilmesPopular(response.data.results);
        })
        .catch(err => console.log(err));
    }

    async function loadFilmsRated() {
        const response = await api.get('discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200')
        .then(response => {
            setListFilmsRated(response.data.results)
        })
        .catch(err => console.log(err))
        
    }

    useEffect(() => {
        loadFilmsPopular();
        loadFilmsRated();
    }, [])
    
    return(
        <ScrollView >
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

            <ContainerHeader>
                <Header>
                    Mais Votados
                </Header>
            </ContainerHeader>

            <FlatList 
                data={listFilmsRated}
                keyExtractor={(item:any) => item.id}
                renderItem={({item}:any) => <ListTopRatedFilms pathImage={item.poster_path} name={item.title} vote_average={item.vote_average} id={item.id}/>}
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{maxHeight: 390}}
            />

            
        </Container>
        </ScrollView>
    );
}

export default Home;