//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Container, ContainerImage, Image, ScrollView, ButtonBack, ContainerButton, ContainerTitle, Horizontal, Title, Genres, ContainerSinopse, Sinopse, Center, ContainerPlayer, TextTrailer, Modal, ViewModal } from "./PageSelectedStyle";
import { ArrowLeftIcon, CircleX, Heart, PlayIcon } from "lucide-react-native";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import api from "../../service/api";
import WebView from "react-native-webview";

function PageSelected():JSX.Element {

    const film = useSelector((state:any) => state.Id_Film.value);
    
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState(null);
    const [favorite, setFavorite] = useState(false);
    const [genres, setGenres] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [linkVideos, setLinkVideos] = useState();
    const [Recomendations, setRecomendations] = useState([]);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadDetails() {
            const reponseVideo = await api.get(`movie/${film}/videos`)
            .then(responseVideo => {
                setLinkVideos(responseVideo.data.results[0].key);
            });

            const response = await api.get(`movie/${film}?language=pt-BR`)
            .then(response => {
                
                setDetails(response.data);
                setGenres(response.data.genres);
                setLoading(false);
                
            })  
            .catch(err => console.log(err));
        }

        async function loadRecommendationsFilm() {
            const response = await api.get(`movie/${film}/recommendations?language=pt-BR`)
            .then(response => {
                setRecomendations(response.data.results);
            })
            .catch(err => console.log(err));
        }

        loadDetails();
        loadRecommendationsFilm();
        
    }, [film]);

    if(loading) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F111D'}}>
                <ActivityIndicator color="#fff" size={32}/>
            </View>
        )
    }
    
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        
            <Container>

                <ContainerImage>

                    <Image source={{uri: `https://image.tmdb.org/t/p/original${details.poster_path}`}} alt="image film"/>
                    
                    <ButtonBack onPress={() => navigation.goBack()}>

                        <ContainerButton>
                            <ArrowLeftIcon color="#fff"/>
                        </ContainerButton>

                    </ButtonBack>

                </ContainerImage>

                <ContainerTitle>

                    <Horizontal value={true} space={20} gap={0}>

                        <Title>
                            {details.title}
                        </Title>

                        <TouchableOpacity>
                            
                            <Heart color="#fff" size={25}/>

                        </TouchableOpacity>

                    </Horizontal>

                    <Genres>
                        {genres.map(item => item.name + " ")}
                    </Genres>

                </ContainerTitle>

                <ContainerSinopse>
                    <Sinopse>
                        {details.overview}
                    </Sinopse>
                </ContainerSinopse>


                <TouchableOpacity onPress={() => setOpenModal(true)}>

                    <Center>

                        <ContainerPlayer>
                       
                            <Horizontal value={true} space={0} gap={10}>
                            
                                <PlayIcon color="#fff"/>

                                <TextTrailer>
                                    Ver Trailer
                                </TextTrailer>

                            </Horizontal>
                       
                        </ContainerPlayer>

                    </Center>

                </TouchableOpacity>

                <Modal visible={openModal} animationType="slide">

                    <ViewModal>

                        <TouchableOpacity onPress={() => setOpenModal(false)} >
                            
                            <View style={{marginTop: 50, marginLeft: 30, width: 50, height: 50}} >
                                <CircleX color="#fff" size={32}/>
                            </View>
                        
                        </TouchableOpacity>

                        <View style={{height: '100%', width: '100%'}}>
                            <WebView source={{uri: `https://www.youtube.com/embed/${linkVideos}`}}  />
                        </View>

                    </ViewModal>
                </Modal>

            </Container>
        
        </ScrollView>
    );
} 

export default PageSelected;