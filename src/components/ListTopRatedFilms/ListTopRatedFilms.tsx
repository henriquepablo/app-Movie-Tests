import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { id_film } from "../../redux/reducers/idFilme";
import { Body, Container, Horizontal, Image, Text } from "./ListTopRatedStyle";
import { StarIcon } from "lucide-react-native";

type props = {
    pathImage: string,
    name: string
    vote_average: string,
    id: string
}

function ListTopRatedFilms({id, name, pathImage, vote_average}:props):JSX.Element{
    
    const navigation = useNavigation();

    const dipatch = useDispatch();

    return(
        <Container>

            <TouchableOpacity activeOpacity={0.5} onPress={ () => {
                dipatch(id_film(id));
                navigation.navigate('PageSelected' as never);
            }}>

                <Image source={{uri: `https://image.tmdb.org/t/p/original${pathImage}`}} alt="image film"/>

                <Body>

                    <Text>
                        {name}
                    </Text>

                    <Horizontal>
                        <View style={{marginTop: 3}}>
                            <StarIcon size={17} color="#FFE500"/>
                        </View>
                        <Text style={{fontSize: 17}}>
                            {vote_average}
                        </Text>
                    </Horizontal>

                </Body>


            </TouchableOpacity>

        </Container>
    );
}

export default ListTopRatedFilms;