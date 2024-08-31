import React from "react";
import { Container, Image } from "./ListPopularStyle";
import { TouchableOpacity } from "react-native";

type props = {
    pathImage: string,
    id: string
}

function ListPopularMovies({id, pathImage}:props) {
    return(
        <Container>
            <TouchableOpacity activeOpacity={0.5}>

                <Image source={{uri: `https://image.tmdb.org/t/p/original${pathImage}`}} alt="image films"/>

            </TouchableOpacity>
        </Container>
    );
}

export default ListPopularMovies;