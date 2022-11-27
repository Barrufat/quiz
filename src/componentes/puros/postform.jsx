import './postform.css'
import { useState } from 'react';
import axios from 'axios';

function PostForm({ points, sendAbrirToggle }) {
    const url = "http://localhost:3030/api/puntos/create"
    const [data, setData] = useState({ nombre: "", puntos: "" })

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata);
        console.log(newdata);
    }

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            nombre: data.nombre,
            puntos: [points],
        })
            .then(res => {
                console.log(res.data)
                setRankingToggle(true);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [rankingToggle, setRankingToggle] = useState(false);

    function abrirRanking() {
        sendAbrirToggle(rankingToggle); 
    }

    return (
        <form onSubmit={(e) => submit(e)} className="formulario">
            <input onChange={(e) => handle(e)} id="nombre" value={data.nombre} placeholder="nombre" type="text"></input>
            <h1 className='points'>Puntuación final: {points}</h1>
            <button className='guardar' type="submit" onClick={abrirRanking}>Guardar</button>
        </form>
    );
}

export default PostForm;