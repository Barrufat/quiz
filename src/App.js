
import './App.css';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

import Carta1 from './componentes/puros/carta1';
import Carta2 from './componentes/puros/carta2';
import Carta3 from './componentes/puros/carta3';
import Carta4 from './componentes/puros/cartaImg';
import Carta5 from './componentes/puros/carta5';
import Carta6 from './componentes/puros/carta6';
import Contador from './componentes/puros/contador';
import PostForm from './componentes/puros/postform';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

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
  const [displayTiempo, setDisplayTiempo] = useState('cardClosed')
  const [displayTiempoCard, setDisplayTiempoCard] = useState('cardClosed')
  const [displayEmpezar, setDisplayEmpezar] = useState('cardOpen')
  const [displayEmpezarCard, setDisplayEmpezarCard] = useState('cardOpen')
  const [displayNombre, setDisplayNombre] = useState('cardClosed')
  const [displayContCarta, setDisplayContCarta] = useState('contenedorCarta1')
  const [zeroToggle, setZeroToggle] = useState(false);
  const [clearToggle, setClearToggle] = useState(true);
  const [displayRanking, setDisplayRanking] = useState('cardClosed')
  const [displayRankingCard, setDisplayRankingCard] = useState('cardClosed')
  const [points, setPoints] = useState([]);
  const [nombreJugador, setNombreJugador] = useState('Nickname')
  const [getRanking, setGetRanking] = useState(true);
  const [numArray, setNumArray] = useState([]);
  const [nombreInput, setNombreInput] = useState('nombreInputGris');

  console.log('NombreInput: ', nombreInput)
  console.log('NombreJugador', nombreJugador)
  // console.log('segundo: ' + segundo);
  // console.log('numArray: ' + numArray);
  // console.log('displayPoints: ' + displayPoints);
  // console.log('getRanking: ' + getRanking);
  // console.log('ClearToggle: ' + clearToggle);

  const [t, i18n] = useTranslation("global");
  // const [displayAR, setDisplayAR] = useState('lngOff')
  // const [displayEN, setDisplayEN] = useState('lngOn')

  // const ActivoAr = () => {
  //   setDisplayAR('lngOn');
  //   setDisplayEN('lngOff');
  //   i18n.changeLanguage("ar");
  // }

  // const ActivoEn = () => {
  //   setDisplayEN('lngOn');
  //   setDisplayAR('lngOff');
  //   i18n.changeLanguage("en");
  // }

  const [idioma, setIdioma] = useState('en');
  var [blockIdioma, setBlockIdioma] = useState(false);

  function canviarIdioma() {
    console.log("canviarIdioma:" + idioma)
    if (blockIdioma == false) {
      blockIdioma = true;
      if (idioma == "en") {
        document.getElementById("en-ar").svgatorPlayer.play();
        i18n.changeLanguage("ar");
        setIdioma("ar");
      } else if (idioma == "ar") {
        document.getElementById("en-ar").svgatorPlayer.reverse();
        i18n.changeLanguage("en");
        setIdioma("en");
      }
    }
  }

  const JQuerycode = () => {
    //inici
    $(".contLng").load("./EN-AR.svg");
    // , function () {
    //    document.getElementById("en-ar").svgatorPlayer.on('end',offset => endIdioma() );
    //    document.getElementById("en-ar").svgatorPlayer.on('stop',offset => stopIdioma()
    // }

    console.log("jquery");
    $(".visor").detach().prependTo(".contPreguntes");
    $(".visor").hide();
    return (
      false
    )
  }

  useEffect(() => {
    JQuerycode();
  }, [])


  function TickTack(numero) {

    setGameOver(false);
    setZeroToggle(false);
    setSegundo(numero + 1);
  }

  const Lanzar = () => {

    let min = 1;
    let max = 7;

    let numero = Math.random() * (max - min) + min;
    let numeroRedondo = Math.floor(numero);

    if (!numArray.includes(numeroRedondo)) {
      console.log('array no incluye al numero: ' + numeroRedondo)
      setNumArray([...numArray, numeroRedondo])
      cambiarNumero(numeroRedondo);
      setGameOver(false);
      setZeroToggle(true);
    } else {
      Lanzar();
    }
  }

  function Empezar() {
    setDisplayContador('contadorOpen');
    setDisplayContCarta('contenedorCarta2');
    setDisplayTiempo('tiempOpen');
    setDisplayTiempoCard('tiempOpenCard');
    setDisplayEmpezar('cardClosed');
    setDisplayNombre('cardClosed');
    setDisplayRanking('cardClosed');
    setDisplayRankingCard('cardClosed');
    setGetRanking(false);
    setPregunta(pregunta + 1);
    setPuntos(0);
    setSegundo(0);
    setNumArray([]);
    setZeroToggle(true);
    setClearToggle(false);
    Lanzar();

    console.log("Nombre Jugador: ", nombreJugador);
  }

  function agregarNombre() {
    setDisplayEmpezarCard('cardClosed');
    setDisplayNombre('cardOpen');
    setDisplayContCarta('contenedorCarta3');
  }

  useEffect(() => {
    if (getRanking) {

      fetch("http://localhost:3030/api/puntos/")
        .then(results => results.json())
        .then(results => setPoints(results.data))
        .catch(err => console.log(err))
      setGetRanking(false);
    }
  }, [getRanking])

  const pointsOrdenados = points.sort((a, b) => {
    if (a.puntos > b.puntos) {
      return -1;
    } else if (a.puntos < b.puntos) {
      return 1;
    }
  });


  useEffect(() => {
    if (segundo === 25 && pregunta < 6) {

      setPregunta(pregunta + 1);
      setSegundo(0);
      setGameOver(true);
      Lanzar();

    } else if (pregunta > 5) {
      $(".visor").hide();
      setClearToggle(true);
      setDisplay1('cardClosed');
      setDisplay2('cardClosed');
      setDisplay3('cardClosed');
      setDisplay4('cardClosed');
      setDisplay5('cardClosed');
      setDisplay6('cardClosed');
      setDisplayContador('cardClosed');
      setDisplayTiempo('cardClosed');
      setDisplayTiempoCard('cardClosed');
      setDisplayPoints('pointsOpen');
      setDisplayContCarta('contenedorCarta3');
    }
  }, [segundo, pregunta, Lanzar])

  const pausaPregunta = (pausa) => {

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

      setSegundo(0);
      setGameOver(true);
      setZeroToggle(true);
      setClearToggle(false);
      Lanzar();
    }
  }

  function cambiarNumero(numeroRedondo) {
    $(".visor").hide();
    $(".visor_" + numeroRedondo).fadeIn("fast");
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
    setGetRanking(toggle);
    setDisplayRanking('ranking');
    setDisplayRankingCard('rankingCard');
    setDisplayPoints('cardClosed');
    setDisplayContCarta('contenedorCarta1');
    setDisplayEmpezar('cardClosed');
    setDisplayEmpezarCard('cardClosed');
    setNumArray([]);
    setPregunta(0);
    setSegundo(0);
    setZeroToggle(true);
    setClearToggle(true);
  }

  const nuevoJuego = () => {
    setDisplayEmpezar('cardOpen');
    setDisplayEmpezarCard('cardOpen');
    setDisplayRanking('cardClosed');
    setDisplayRankingCard('cardClosed');
    setNombreJugador('Nickname');
  }

  const onChange = (input) => {
    setNombreJugador(input);
    // console.log("Input changed", input);
    // console.log("Nombre Jugador: ", nombreJugador);
  }

  useEffect(() => {
    if (nombreJugador !== 'Nickname') {
      setNombreInput('nombreInput')
    } else if (nombreJugador === 'Nickname') {
      setNombreInput('nombreInputGris')
    }
  }, [nombreJugador])


  return (
    <>
      <div className='contenedorVisor'>

        <div className={displayEmpezar}>
          <h1 className='textoInicio'>{t("intro1")} <br /> {t("intro2")}  <br /> {t("intro3")} </h1>
        </div>

        <div className={displayRanking}>
          <h1 className='tituloRanking'>Scoreboard</h1>
          <ol>
            {(pointsOrdenados.slice(0, 1)).map(jugador => (
              <div>
                <li key={jugador.id} className='jugador' >
                  <h1 className='nombrePrimero'>{jugador.nombre} <h1 className='puntosPrimero'>{jugador.puntos} points</h1></h1>
                </li>
                <img className='banderitas' src='./banderitas.png' alt='banderitas' />
              </div>
            ))}
          </ol>
          <ol>
            {(pointsOrdenados.slice(1, pointsOrdenados.length)).map(jugador => (
              <li key={jugador.id} className='jugador' >
                <h1 className='nombreJugador'>{jugador.nombre} <h1 className='puntosJugador'>{jugador.puntos} points</h1></h1>
              </li>
            ))}
          </ol>
        </div>

        <div className={displayContador}>
          <h1 className='currentPregunta'> Question {pregunta} </h1>
          {/* <h3 className='currentPuntos'> Puntos: {puntos} </h3> */}
          <h1 className='currentPregunta'> {pregunta}/10 </h1>
        </div>

        <div className='contPreguntes'>
          <div className='contContador'>
            <div className={displayTiempo}>
              <Contador className='contador' zeroToggle={zeroToggle} clearToggle={clearToggle} sendContador={TickTack} />
            </div>
          </div>
        </div>
      </div>


      <div className={displayContCarta}>
        <div className={displayEmpezarCard}>
          <h1 className='textoInicioCard'> {t("intro1")} <br /> {t("intro2")} <br /> {t("intro3")}</h1>
          <div className='contLng' onClick={canviarIdioma}>
            {/* <button className={displayAR} onClick={ActivoAr}>AR</button>
              <button className={displayEN} onClick={ActivoEn}>EN</button> */}

          </div>
          <button className='registrarBoton' onClick={agregarNombre}>Take the quiz</button>
          <button className='rankingBoton' onClick={verRanking}>Scoreboard</button>
        </div>

        <div className={displayNombre}>
          <h1 className='textoRegistro'>Before we start...</h1>
          <h1 className={nombreInput}> {nombreJugador} </h1>
          <div className='teclado'>
            <Keyboard
              onChange={onChange}
            />
          </div>
          <button className='empezarBoton' onClick={Empezar}>Lets go!</button>
        </div>

        <div>
          <div className={display1}>
            <div className='tituloPreguntaCard'>
              <h1 className='currentPreguntaCard'> Question {pregunta} </h1>
            </div>
            <Carta1 segundo={segundo} gameOver={gameOver} idioma={idioma}
              siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
          </div>
          <div className={display2}>
            <div className='tituloPreguntaCard'>
              <h1 className='currentPreguntaCard'> Question {pregunta} </h1>
            </div>
            <Carta2 segundo={segundo} gameOver={gameOver}
              siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
          </div>
          <div className={display3}>
            <div className='tituloPreguntaCard'>
              <h1 className='currentPreguntaCard'> Question {pregunta} </h1>
            </div>
            <Carta3 segundo={segundo} gameOver={gameOver}
              siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
          </div>
          <div className={display4}>
            <div className='tituloPreguntaCard'>
              <h1 className='currentPreguntaCard'> Question {pregunta} </h1>
            </div>
            <Carta4 segundo={segundo} gameOver={gameOver}
              siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
          </div>
          <div className={display5}>
            <div className='tituloPreguntaCard'>
              <h1 className='currentPreguntaCard'> Question {pregunta} </h1>
            </div>
            <Carta5 segundo={segundo} gameOver={gameOver}
              siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
          </div>
          <div className={display6}>
            <div className='tituloPreguntaCard'>
              <h1 className='currentPreguntaCard'> Question {pregunta} </h1>
            </div>
            <Carta6 segundo={segundo} gameOver={gameOver}
              siguienteSend={siguientePregunta} sendPausa={pausaPregunta} sendPuntos={Puntos} />
          </div>

          <div className={displayTiempoCard}>
            <Contador className='contador' zeroToggle={zeroToggle} clearToggle={clearToggle} sendContador={TickTack} />
          </div>
          <div className={displayTiempoCard}>
            <h1 className='contadorPreguntaCard'>{pregunta}/10</h1>
          </div>


          <div className={displayPoints}>
            <PostForm points={puntos} name={nombreJugador} sendAbrirToggle={verRanking} />
          </div>

          <div className={displayRankingCard}>
            <button className='homeBoton' onClick={nuevoJuego}>Home</button>
            <h1 className='tituloRankingCard'>Scoreboard:</h1>
            {/* <h1 className='nombrePrimeroCard'>{primero.nombre} <h1 className='puntosPrimeroCard'>{primero.puntos}</h1></h1> */}
            <ol>
              {(pointsOrdenados.slice(0, 1)).map(jugador => (
                <div>
                  <li key={jugador.id} className='jugador' >
                    <h1 className='nombrePrimeroCard'>{jugador.nombre} <h1 className='puntosPrimeroCard'>{jugador.puntos} points</h1></h1>
                  </li>
                  <img className='banderitasCard' src='./banderitas.png' alt='banderitas' />
                </div>
              ))}
            </ol>
            <ol >
              {(pointsOrdenados.slice(1, pointsOrdenados.length)).map(jugador => (
                <li key={jugador.id} className='jugador' >
                  <h1 className='nombreJugadorCard'>{jugador.nombre} <h1 className='puntosJugadorCard'>{jugador.puntos} points</h1></h1>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </>

  );
}

export default App;
