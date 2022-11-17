
import './App.css';
import { useState, useEffect } from 'react';

import Carta1 from './componentes/puros/carta1';
import Carta2 from './componentes/puros/carta2';
import Carta3 from './componentes/puros/carta3';
import Carta4 from './componentes/puros/carta4';
import Carta5 from './componentes/puros/carta5';
import Carta6 from './componentes/puros/carta6';
import Contador from './componentes/puros/contador';
import PostForm from './componentes/puros/postform';
// import Ranking from './componentes/ranking';

function App() {

  const [display1, setDisplay1] = useState('cardClosed');
  const [display2, setDisplay2] = useState('cardClosed');
  const [display3, setDisplay3] = useState('cardClosed');
  const [display4, setDisplay4] = useState('cardClosed');
  const [display5, setDisplay5] = useState('cardClosed');
  const [display6, setDisplay6] = useState('cardClosed');

  const [segundo, setSegundo] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [pregunta, setPregunta] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [displayPoints, setDisplayPoints] = useState('cardClosed')
  const [displayContador, setDisplayContador] = useState('cardClosed')
  const [displayEmpezar, setDisplayEmpezar] = useState('cardOpen')
  const [zeroToggle, setZeroToggle] = useState(false);
  const [clearToggle, setClearToggle] = useState(true);
  const [displayRanking, setDisplayRanking] = useState('ranking')
  const [points, setPoints] = useState([]);
  // const [numeroDado, setNumeroDado] = useState();

  const [numArray, setNumArray] = useState ([]);
  console.log('numArray: ' + numArray);

  function TickTack(numero) {

    setGameOver(false);
    setZeroToggle(false);
    setSegundo(numero + 1);
  }


  // useEffect(() => {

  //   if (!numArray.includes(numeroDado)) {
  //     console.log('array no incluye al numero: ' + numeroDado)
  //     numArray.push({ numeroDado });
  //     cambiarNumero(numeroDado);
  //     setGameOver(false);
  //     setZeroToggle(true);
  //   } else {
  //     Lanzar();
  //   }

  // }, [numeroDado])


  const Lanzar = () => {

    let min = 1;
    let max = 7;

    let numero = Math.random() * (max - min) + min;
    let numeroRedondo = Math.floor(numero);

    if (!numArray.includes(numeroRedondo)) {
      console.log('array no incluye al numero: ' + numeroRedondo)
      setNumArray( [...numArray, numeroRedondo])
      cambiarNumero(numeroRedondo);
      setGameOver(false);
      setZeroToggle(true);
    } else {
      Lanzar();
    }
  }

  function Empezar() {
    setDisplayContador('Open');
    setDisplayEmpezar('cardClosed');
    setDisplayRanking('cardClosed');

    setPregunta(pregunta + 1);
    // console.log('Pregunta :' + pregunta);
    setSegundo(0);
    setZeroToggle(true);
    setClearToggle(false);
    Lanzar();
  }

  useEffect(() => {
    // if (getTrigger) {
    fetch("http://localhost:3030/api/puntos/")
      .then(results => results.json())
      .then(results => setPoints(results.data))
      .catch(err => console.log(err))
    // }
  }, [])

  // console.log("Puntos" + points);
  // console.log('GetTrigger: ' + getTrigger)

  useEffect(() => {
    if (segundo === 25 && pregunta < 6) {

      setPregunta(pregunta + 1);
      setSegundo(0);
      setGameOver(true);

      Lanzar();
    }   else if (pregunta > 5) {
      setClearToggle(true);
      setDisplay1('cardClosed');
      setDisplay2('cardClosed');
      setDisplay3('cardClosed');
      setDisplay4('cardClosed');
      setDisplay5('cardClosed');
      setDisplay6('cardClosed');
      setDisplayContador('cardClosed')
      setDisplayPoints('cardOpen');
    }
  }, [segundo, pregunta, Lanzar])

  // useEffect(() => {
  //   if (pregunta === 6) {
  //     setClearToggle(true);
  //     setDisplay1('cardClosed');
  //     setDisplay2('cardClosed');
  //     setDisplay3('cardClosed');
  //     setDisplay4('cardClosed');
  //     setDisplay5('cardClosed');
  //     setDisplayContador('cardClosed')
  //     setDisplayPoints('cardOpen');
  //   }
  // }, [pregunta])

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

  function cambiarNumero(numeroRedondo) {

    if (numeroRedondo === 1) {
      setDisplay1('cardOpen');
      setDisplay2('cardClosed');
      setDisplay3('cardClosed');
      setDisplay4('cardClosed');
      setDisplay5('cardClosed');
      setDisplay6('cardClosed');
    } else if (numeroRedondo === 2) {
      setDisplay2('cardOpen');
      setDisplay1('cardClosed');
      setDisplay3('cardClosed');
      setDisplay4('cardClosed');
      setDisplay5('cardClosed');
      setDisplay6('cardClosed');
    } else if (numeroRedondo === 3) {
      setDisplay2('cardClosed');
      setDisplay1('cardClosed');
      setDisplay3('cardOpen');
      setDisplay4('cardClosed');
      setDisplay5('cardClosed');
      setDisplay6('cardClosed');
    } else if (numeroRedondo === 4) {
      setDisplay2('cardClosed');
      setDisplay1('cardClosed');
      setDisplay3('cardClosed');
      setDisplay4('cardOpen');
      setDisplay5('cardClosed');
      setDisplay6('cardClosed');
    } else if (numeroRedondo === 5) {
      setDisplay2('cardClosed');
      setDisplay1('cardClosed');
      setDisplay3('cardClosed');
      setDisplay4('cardClosed');
      setDisplay5('cardOpen');
      setDisplay6('cardClosed');
    } else if (numeroRedondo === 6) {
      setDisplay2('cardClosed');
      setDisplay1('cardClosed');
      setDisplay3('cardClosed');
      setDisplay4('cardClosed');
      setDisplay5('cardClosed');
      setDisplay6('cardOpen');
    }
  }

  function Puntos(numero) {
    setPuntos(puntos + numero)
  }

  function verRanking(toggle) {
    if (toggle) {
      setDisplayRanking('ranking');
      setDisplayEmpezar('cardOpen');
    }
  }

  return (
    <div className='contenedor'>
      <div className={displayEmpezar}>
        <button onClick={Empezar}>Nuevo juego</button>
        <div className={displayRanking}>
          <h1 className='tituloRanking'>RANKING:</h1>
          <ol >
            {points.map(jugador => (
              <li key={jugador.id} className='jugador' >
                <h1 className='nombreJugador'>{jugador.nombre} - {jugador.puntos}</h1>
              </li>
            ))}
          </ol>
        </div>
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
        <div className={display4}>
          <Carta4 segundo={segundo} gameOver={gameOver}
            siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
        </div>
        <div className={display5}>
          <Carta5 segundo={segundo} gameOver={gameOver}
            siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
        </div>
        <div className={display6}>
          <Carta6 segundo={segundo} gameOver={gameOver}
            siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
        </div>
        <div className={displayPoints}>
          <PostForm points={puntos} sendAbrirToggle={verRanking} />
        </div>
      </div>
    </div>
  );
}

export default App;
