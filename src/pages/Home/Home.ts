import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('./home-background.svg') no-repeat 700px bottom;
    background-color: ${(props) => props.theme.background};
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;


export const Title = styled.h1`
  font-size: 54px;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  padding-bottom: 50px;
  text-align: center;
  max-width: 500px;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  padding-bottom: 50px;
  text-align: center;
  max-width: 500px;
`;

export const Img = styled.img`

    width: 25px;
    height: 25px;
`;

export const ButtonBox = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  height: 50px;
  width: 50px;
  font-size: 30px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.5s;

  &:hover {
    filter: opacity(0.8);
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 50px;
  border: none;
  border-radius: 5px;
  position: relative;
  padding-left: 4rem;
  padding-right: 1.5rem;
  
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: "home-image.svg",
}))`
  width: 50%;
`;