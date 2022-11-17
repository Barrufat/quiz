import './postform.css'
import { useState } from 'react';
import axios from 'axios';

function PostForm({points, sendAbrirToggle}) {
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
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [rankingToggle, setRankingToggle] = useState(false);

    function abrirRanking (){
        setRankingToggle(true);
        console.log('RankingToggle: ' + rankingToggle)
        sendAbrirToggle(rankingToggle)
    }

    return (
        <div className="formulario">
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="nombre" value={data.nombre} placeholder="nombre" type="text"></input>
                <h1>Puntuación final: {points}</h1>
                <button type="submit" onClick={abrirRanking}>Guardar</button>
            </form>
        </div>
    );
}

export default PostForm;