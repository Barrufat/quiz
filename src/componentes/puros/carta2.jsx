import './cartaTipo1.css';
import React, { useEffect, useState } from "react";

const Carta2 = ({ siguienteSend, sendPuntos, sendPausa, segundo, gameOver }) => {

  const [color1, setColor1] = useState('respuesta');
  const [color2, setColor2] = useState('respuesta');
  const [color3, setColor3] = useState('respuesta');
  const [color4, setColor4] = useState('respuesta');
  const [color1B, setColor1B] = useState('closed');
  const [color2B, setColor2B] = useState('closed');
  const [color3B, setColor3B] = useState('closed');
  const [color4B, setColor4B] = useState('closed');

  const [siguiente, setSiguiente] = useState('closed');


  const PreguntaAcertada = () => {
    setSiguiente('open')
    setColor1('closed')
    setColor1B('respuestaCorrecta')
    sendPausa(true);

    if (segundo < 5) {
      sendPuntos(100)
    } else if (5 < segundo < 10) {
      sendPuntos(66);
    } else if (10 < segundo) {
      sendPuntos(33)
    }
  }

  const Pregunta2 = () => {
    sendPuntos(-10)
    setColor2('closed')
    setColor2B('respuestaIncorrecta')
  }

  const Pregunta3 = () => {
    sendPuntos(-10)
    setColor3('closed')
    setColor3B('respuestaIncorrecta')
  }

  const Pregunta4 = () => {
    sendPuntos(-10)
    setColor4('closed')
    setColor4B('respuestaIncorrecta')
  }

  const Siguiente = () => {

    siguienteSend(true);
    setSiguiente('closed');

    setColor1('respuesta');
    setColor2('respuesta');
    setColor3('respuesta');
    setColor4('respuesta');
    setColor1B('closed');
    setColor2B('closed');
    setColor3B('closed');
    setColor4B('closed');
  }

  useEffect(() => {
    if (gameOver) {

      setColor1('respuesta');
      setColor2('respuesta');
      setColor3('respuesta');
      setColor4('respuesta');
      setColor1B('closed');
      setColor2B('closed');
      setColor3B('closed');
      setColor4B('closed');
    }
  }, [gameOver])
  

  return (
    <div className='carta'>
      <h1 className='pregunta'>Pregunta2: Bla bla bla bla bla?</h1>
      <div>
      <h2 className={color1} onClick={PreguntaAcertada}>Respuesta 1</h2>
      <h2 className={color1B} >Respuesta 1</h2>
      </div>
      <div>
      <h2 className={color2} onClick={Pregunta2}>Respuesta 2</h2>
      <h2 className={color2B}>Respuesta 2</h2>
      </div>
      <div>
      <h2 className={color3} onClick={Pregunta3}>Respuesta 3</h2>
      <h2 className={color3B}>Respuesta 3</h2>
      </div>
      <div>
      <h2 className={color4} onClick={Pregunta4}>Respuesta 4</h2>
      <h2 className={color4B}>Respuesta 4</h2>
      </div>
      <h1 className={siguiente} onClick={Siguiente}> SIGUIENTE PREGUNTA</h1>
    </div>
  )
}

export default Carta2;