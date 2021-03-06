import styled from "styled-components";
import { MapContainer as MapContainerLeaflet } from "react-leaflet";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

export const Img = styled.img`

    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.background};
    padding: 10px;
    border-radius:  5px;
    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
`;

export const Form = styled.form`
  width: 40vw;
  background-color: ${(props) => props.theme.white};
  padding: 50px;
  margin-top: 40px;
  border-radius: 8px;
  @media (max-width: 1024px) {
    width: 70vw;
  }
`;

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.primary};
  font-size: 2rem;
  padding-bottom: 30px;

`;

export const MapContainer = styled(MapContainerLeaflet)`
  height: 60vh;
`;

export const Section = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 20px;
  padding-bottom: 30px;
  padding-top: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryBox = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.background};
  border: ${(props) =>
    props.isActive ? `2px solid ${props.theme.background}` : "none"};
  border-radius: 8px;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

export const CategoryImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 50px;
  border: none;
  border-radius: 5px;
  width: 10rem;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.primary}99;
  }
`;