import { 
    Button,
    ButtonContainer,
    CategoryBox,
    CategoryContainer,
    CategoryImage,
    Container,
    Form,
    FormTitle,
    Img,
    MapContainer,
    Section
} from './New'

import Input from '../../components/Input';
import { useState } from 'react';
import {LatLngExpression, LeafletMouseEvent} from 'leaflet';
import { TileLayer, Marker, Tooltip } from 'react-leaflet';
import { categories } from './categories';
import  useGetLocation from '../../hooks/useGetLocation';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

import west from '../../assets/west.svg'



export default function New (){
    const history = useHistory();
    const [loadding, setLoading] = useState('')

    const [formValues, setForValues] = useState({
        name:'',
        description: '',
        contact: '',
        category: '',
        coords: [0, 0],
    });

    const { coords } = useGetLocation();
    
    if (!coords) {
        return(
           <p style={{textAlign: 'center'}}>Carregando...</p>
        )
    }

   async function onSubmit() {
        const request = await fetch('http://localhost:3000/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                ...formValues,
                latitude: formValues.coords[0],
                longitude: formValues.coords[1]
            })

            
        }) ;

        if (request.ok) {
            toast('Estabelecimento salvo com sucesso!', {
                type: 'success',
                autoClose: 2000,
                onClose: () => {
                    history.push('/');
                }
            })
        }
    }
    

    return(
        <Container>
            <Form onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
            }}>
                <Section>
                    <FormTitle>Cadastro do comércio local</FormTitle>
                    <Link to={'/'}>
                        <Img src={west} />
                    </Link>
                </Section>
                <Section>Dados</Section> 
                
                <Input 
                    label='Nome do local'
                    name='name'
                    value={formValues.name}
                    onChange={setForValues} 
                />

                <Input 
                    label='Desacrição'
                    name='description'
                    value={formValues.description}
                    onChange={setForValues} 
                />

                <Input 
                    label='Contato'
                    name='contact'
                    value={formValues.contact}
                    onChange={setForValues} 
                />
                

                <Section>Endereço</Section> 

                <MapContainer center={{
                    lat: coords[0],
                    lng: coords[1]
                } as LatLngExpression}
                    zoom={13}
                    whenCreated={(map) => {
                        map.addEventListener('click', (event: LeafletMouseEvent) => {
                            setForValues(prev => ({...prev, coords: [event.latlng.lat, event.latlng.lng]}))
                        })
                    }}
                >
                <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker 
                    position={[formValues.coords[0], formValues.coords[1]] as LatLngExpression}
                
                />
                </MapContainer> 

                <Section>Categoria</Section>

                <CategoryContainer>
                    {categories.map(category => (
                        <CategoryBox 
                            key={category.key}
                            onClick={() => {
                                setForValues(prev => ({...prev, category: category.key}))
                            }}
                            isActive={formValues.category === category.key}
                        >
                            <CategoryImage
                                src={category.url}
                            />
                            {category.label}
                        </CategoryBox>
                    ))}

                </CategoryContainer>  
                <ButtonContainer>
                    <Button type='submit'>Salvar</Button>
                </ButtonContainer> 
            </Form>

        </Container>
    )
}