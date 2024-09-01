import React from "react";
import { Container, ContainerImage, Image, ScrollView, ButtonBack, ContainerButton, ContainerTitle, Horizontal, Title, Genres, ContainerSinopse, Sinopse, Center, ContainerPlayer, TextTrailer } from "./PageSelectedStyle";
import { ArrowLeftIcon, Heart, PlayIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

function PageSelected():JSX.Element {
    
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        
            <Container>

                <ContainerImage>

                    <Image/>
                    
                    <ButtonBack>

                        <ContainerButton>
                            <ArrowLeftIcon color="#fff"/>
                        </ContainerButton>

                    </ButtonBack>

                </ContainerImage>

                <ContainerTitle>

                    <Horizontal value={true} space={20} gap={0}>

                        <Title>
                            Malvado favorito
                        </Title>

                        <TouchableOpacity>
                            
                            <Heart color="#fff" size={25}/>

                        </TouchableOpacity>

                    </Horizontal>

                    <Genres>
                        Terror
                    </Genres>

                </ContainerTitle>

                <ContainerSinopse>
                    <Sinopse>
                        ahjah
                    </Sinopse>
                </ContainerSinopse>


                <TouchableOpacity>

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

            </Container>
        
        </ScrollView>
    );
} 

export default PageSelected;