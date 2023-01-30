import './postform.css'
import { useState } from 'react';
import axios from 'axios';

function PostForm({ name, points, sendAbrirToggle }) {
    const url = "http://localhost:3030/api/puntos/create"

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            nombre: [name],
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
            <h1 className='name'>Hey {name}! You got...</h1>
            <h1 className='points'> {points} points</h1>
            <button className='guardar' type="submit" onClick={abrirRanking}>Scoreboard</button>
        </form>
    );
}

export default PostForm;