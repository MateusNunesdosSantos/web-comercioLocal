import { Container, 
        Title, 
        Button, 
        ButtonBox,
         Image, 
        LeftContainer, 
        RightContainer,
        Img, 
        SubTitle } from "./Home";
import { Link } from "react-router-dom";
import arrow from  '../../assets/arrow.svg';

export default function Home () {
    return (
        <div>
            <Container>
                <LeftContainer>
                    <Title>O Mapa local de sua cidade</Title>
                    <SubTitle>Encontre no comercio local tudo que prescisa</SubTitle>
                    <Link to={'/new'}>
                       <Button>
                        <ButtonBox>
                            <Img src={arrow}/>
                        </ButtonBox>
                        Cadastre um ponto comercial
                       </Button>
                    </Link>
                </LeftContainer>

                <RightContainer>
                    <Image/>
                </RightContainer>
            </Container>
        </div>
    )
}