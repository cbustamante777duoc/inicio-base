import { useState, useEffect } from 'react';

export default function Wealcome(props) {
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);
    const { message, name } = props;

    useEffect(() => {
        console.log(semaforo);
    },[semaforo])

    const contar = () => {
        setCounter(counter + 1);
    }

    const cambiarSemaforo = () => {
        setSemaforo(!semaforo);
    }

    return (
        <div>
            <h1>{message}</h1>
            <p>Hola {name}</p>
            <p>Contador desde useStade {counter}</p>
            <hr />
            <p>El semaforo esta en color {semaforo ? 'green' : 'red'}</p>
            <button type="submit" onClick={contar}>
                Sumar contador
            </button>

            <button type="submit" onClick={cambiarSemaforo}>
                Cambiar color semaforo
            </button>
        </div>
    );
};