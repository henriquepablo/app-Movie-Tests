import React, { useEffect, useState } from "react";
import { Container, ContainerInput, TextInput, ViewIcon } from "./SearchStyle";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { SearchIcon } from "lucide-react-native";
import api from "../../service/api";
import ListTopRatedFilms from "../../components/ListTopRatedFilms/ListTopRatedFilms";
import { Center } from "../../components/Page/PageSelectedStyle";

function Search():JSX.Element {


    const [nameFilm, setNameFilm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function search() {
            const response = await api.get(`search/movie?query=${nameFilm}&language=pt-BR`)
            .then(response => {
                setResults(response.data.results);
            })
            .catch(err => console.log(err))
        }
        
        search();
    }, [nameFilm]);


    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
            
                <ContainerInput>
            
                    <TextInput placeholder="Pesquise algum filme" onChangeText={(value) => setNameFilm(value)}/>
                    
                    <ViewIcon>
                        <SearchIcon color="#777676" size={20}/>
                    </ViewIcon>
            
                </ContainerInput>


                <FlatList 
                    data={results}
                    keyExtractor={(item:any) => item.id}
                    renderItem={({item}:any) => <ListTopRatedFilms pathImage={item.poster_path} name={item.title} vote_average={item.vote_average} id={item.id}/>}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{marginTop: 50, maxHeight: 390, marginRight: 20}}
                />

            
            </Container>

        </TouchableWithoutFeedback>
    );
}

export default Search;