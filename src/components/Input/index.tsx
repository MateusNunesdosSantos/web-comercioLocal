import './Input'
import { Container, InputStyled,  } from './Input';

interface InputProps {
    label: string;
    name: string;
    value: string;
    onChange: Function;
}

export default function Input (props: InputProps) {
    return(
        <Container>
            <label>{props.label}</label>
            <InputStyled
                required 
                name={props.name}
                value={props.value}
                onChange={
                    event => {
                        props.onChange((prev: any) => ({...prev, [props.name]: event.target.value }))
                    }
                }
            />
        </Container>
    );
}