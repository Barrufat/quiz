
import './App.css';
import { useState, useEffect } from 'react';
// import axios from 'axios';

import Carta1 from './componentes/puros/carta1';
import Carta2 from './componentes/puros/carta2';
import Contador from './componentes/puros/contador';
import Carta3 from './componentes/puros/carta3';
// import Ranking from './componentes/ranking';

function App() {

  const [display1, setDisplay1] = useState('cardClosed');
  const [display2, setDisplay2] = useState('cardClosed');
  const [display3, setDisplay3] = useState('cardClosed');

  const [segundo, setSegundo] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [pregunta, setPregunta] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [displayPoints, setDisplayPoints] = useState('cardClosed')
  const [displayContador, setDisplayContador] = useState('cardClosed')
  const [displayEmpezar, setDisplayEmpezar] = useState('cardOpen')
  const [zeroToggle, setZeroToggle] = useState(false);
  const [clearToggle, setClearToggle] = useState(true);
  const [points, setPoints] = useState('');

  function TickTack(numero) {
    setGameOver(false);
    setZeroToggle(false);
    setSegundo(numero + 1);
    // console.log('Segundo desde App: ' + segundo);
  }

  const Lanzar = () => {

    // setPregunta(pregunta + 1);
    // setSegundo(0);
    // setClearToggle(false);

    let min = 1;
    let max = 4;

    let numero = Math.random() * (max - min) + min;
    let numeroRedondo = Math.floor(numero);

    cambiarNumero(numeroRedondo);
    setGameOver(false);
    setZeroToggle(true);

  }

  function Empezar() {

    setDisplayContador('Open');
    setDisplayEmpezar('cardClosed');

    setPregunta(pregunta + 1);
    // console.log('Pregunta :' + pregunta);
    setSegundo(0);
    setZeroToggle(true);
    setClearToggle(false);
    Lanzar();
  }

  function verRanking() {
    getPuntos();
    setDisplayContador('Open');
    setDisplayEmpezar('cardOpen');
    setDisplayPoints('cardClosed');
  }

  function getPuntos() {

    fetch("http://localhost:3030/api/puntos/")
      .then(results => results.json())
      .then(results => setPoints(JSON.stringify(results.data)))
      .catch(err => console.log(err))
    console.log("Puntos" + points);

    return (
      <ul className='ranking'>
        {points.map(jugador => (
          <li key={jugador.id} className='jugador' >
            <h1>{jugador.nombre}</h1>
            <h2>{jugador.puntos}</h2>
          </li>
        ))}
      </ul>
    )
  }

  useEffect(() => {
    if (segundo === 25) {

      setPregunta(pregunta + 1);
      setSegundo(0);
      setGameOver(true);

      let min = 1;
      let max = 4;

      let numero = Math.random() * (max - min) + min;
      let numeroRedondo = Math.floor(numero);

      if (numeroRedondo === 1) {
        setDisplay1('cardOpen');
        setDisplay2('cardClosed');
        setDisplay3('cardClosed');
        // console.log('Carta: ' + numeroRedondo);
        // console.log('Display1: ' + display1 + '  Display2: ' + display2)
      } else if (numeroRedondo === 2) {
        setDisplay2('cardOpen');
        setDisplay1('cardClosed');
        setDisplay3('cardClosed');
        // console.log('Carta: ' + numeroRedondo);
        // console.log('Display2: ' + display2 + '  Display1: ' + display1)
      } else if (numeroRedondo === 3) {
        setDisplay2('cardClosed');
        setDisplay1('cardClosed');
        setDisplay3('cardOpen');
        // console.log('Carta: ' + numeroRedondo);
        // console.log('Display2: ' + display2 + '  Display1: ' + display1)
      }

      setZeroToggle(true);

    }
  }, [segundo, display1, display2, pregunta])

  useEffect(() => {
    if (pregunta === 6) {
      setClearToggle(true);
      setDisplay1('cardClosed');
      setDisplay2('cardClosed');
      setDisplay3('cardClosed');
      setDisplayContador('cardClosed')
      setDisplayPoints('cardOpen');
    }
  }, [pregunta])

  const pausaPregunta = (pausa) => {

    // console.log('Pausa: ' + pausa)
    if (pausa) {
      setClearToggle(true);
      setZeroToggle(true);
    } else {
      setClearToggle(false);
    }
  }

  const siguientePregunta = (siguiente) => {
    if (siguiente) {

      setPregunta(pregunta + 1);
      // console.log('Pregunta :' + pregunta);
      setSegundo(0);
      setGameOver(true);
      setZeroToggle(true);
      setClearToggle(false);
      Lanzar();
    }
  }

  function cambiarNumero(numero) {

    if (numero === 1) {
      setDisplay1('cardOpen');
      setDisplay2('cardClosed');
      setDisplay3('cardClosed');
    } else if (numero === 2) {
      setDisplay2('cardOpen');
      setDisplay1('cardClosed');
      setDisplay3('cardClosed');

    } else if (numero === 3) {
      setDisplay2('cardClosed');
      setDisplay1('cardClosed');
      setDisplay3('cardOpen');
    }
  }

  function Puntos(numero) {
    setPuntos(puntos + numero)
  }



  return (
    <div className='contenedor'>
      <div className={displayEmpezar}>
        <button onClick={Empezar}>Nuevo juego</button>
      </div>
      <div>
        <div className={displayContador}>
          <Contador zeroToggle={zeroToggle} clearToggle={clearToggle} sendContador={TickTack} />
          <h1> Puntos: {puntos} </h1>
          <h2> Pregunta: {pregunta} </h2>
          {/* <button onClick={getPuntos}>Fetch</button> */}
        </div>
        <div className={display1}>
          <Carta1 segundo={segundo} gameOver={gameOver}
            siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
        </div>
        <div className={display2}>
          <Carta2 segundo={segundo} gameOver={gameOver}
            siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
        </div>
        <div className={display3}>
          <Carta3 segundo={segundo} gameOver={gameOver}
            siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
        </div>
        <div className={displayPoints}>
          <form>
            <input type="text"></input>
            <h1>Puntuación final: {puntos}</h1>
            <button onClick={verRanking}>Guardar</button>
          </form>
        </div>
      </div>
      <getPuntos/>
    </div>
  );
}

export default App;
