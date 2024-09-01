import React from "react";
import { Container, Image } from "./ListPopularStyle";
import { TouchableOpacity } from "react-native";
import { id_film } from "../../redux/reducers/idFilme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

type props = {
    pathImage: string,
    id: string
}

function ListPopularMovies({id, pathImage}:props) {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    return(
        <Container>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                dispatch(id_film(id));
                navigation.navigate('PageSelected' as never);
            }}>

                <Image source={{uri: `https://image.tmdb.org/t/p/original${pathImage}`}} alt="image films"/>

            </TouchableOpacity>
        </Container>
    );
}

export default ListPopularMovies;