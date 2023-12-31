import { useState } from 'react'
import Enviado from '../Enviado/Enviado';
import './Registro.css';

const Registro = () => {
    const [nombre, setNombre] = useState ("");
    const [edad, setEdad] = useState();
    const [pokemon, setPokemon] = useState("");
    const [show, setShow]= useState (false);
    const [error, setError]= useState (false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (nombre.length > 5 && edad >= 18 && pokemon != null) {
            setShow (true)
        }else{
            setError (true)
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label> Nombre Completo</label>
            <input type='text' name='nombre' value={nombre} onChange={(event) => setNombre(event.target.value)} />
            <label> Edad </label>
            <input type='number' name='edad' value={edad} onChange={(event) => setEdad(event.target.value)}/>
            <label> Pokemon Favorito</label>
            <input type='text' name='pokemon' value={pokemon} onChange={(event) => setPokemon(event.target.value)}/>
            <button>Enviar</button>
        </form>
        {
            show ? <Enviado nombre={nombre} edad ={edad} pokemon={pokemon}/> : null
        }
        {error ? <h5> Verificar los datos </h5>: null}
      
    </div>
  )
}

export default Registro
