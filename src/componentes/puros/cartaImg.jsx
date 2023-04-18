import './cartaTipo2.css';
import React, { useEffect, useState } from "react";

const CartaImg = ({ siguienteSend, sendPuntos, sendPausa, segundo, gameOver }) => {

  const [color1, setColor1] = useState('respuesta');
  const [color2, setColor2] = useState('respuesta');
  const [color3, setColor3] = useState('respuesta');
  const [color4, setColor4] = useState('respuesta');
  const [color1B, setColor1B] = useState('closed');
  const [color2B, setColor2B] = useState('closed');
  const [color3B, setColor3B] = useState('closed');
  const [color4B, setColor4B] = useState('closed');
  const [color1Card, setColor1Card] = useState('respuestaCard');
  const [color2Card, setColor2Card] = useState('respuestaCard');
  const [color3Card, setColor3Card] = useState('respuestaCard');
  const [color4Card, setColor4Card] = useState('respuestaCard');
  const [color1BCard, setColor1BCard] = useState('closed');
  const [color2BCard, setColor2BCard] = useState('closed');
  const [color3BCard, setColor3BCard] = useState('closed');
  const [color4BCard, setColor4BCard] = useState('closed');

  const [siguiente, setSiguiente] = useState('closed');


  const PreguntaAcertada = () => {
    setSiguiente('open')
    setColor3('closed')
    setColor3B('respuestaCorrecta')
    setColor3Card('closed')
    setColor3BCard('respuestaCorrectaCard')
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
    setColor2Card('closed')
    setColor2BCard('respuestaIncorrectaCard')
  }

  const Pregunta1 = () => {
    sendPuntos(-10)
    setColor1('closed')
    setColor1B('respuestaIncorrecta')
    setColor1Card('closed')
    setColor1BCard('respuestaIncorrectaCard')
  }

  const Pregunta4 = () => {
    sendPuntos(-10)
    setColor4('closed')
    setColor4B('respuestaIncorrecta')
    setColor4Card('closed')
    setColor4BCard('respuestaIncorrectaCard')
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

    setColor1Card('respuestaCard');
    setColor2Card('respuestaCard');
    setColor3Card('respuestaCard');
    setColor4Card('respuestaCard');
    setColor1BCard('closed');
    setColor2BCard('closed');
    setColor3BCard('closed');
    setColor4BCard('closed');
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

      setColor1Card('respuestaCard');
      setColor2Card('respuestaCard');
      setColor3Card('respuestaCard');
      setColor4Card('respuestaCard');
      setColor1BCard('closed');
      setColor2BCard('closed');
      setColor3BCard('closed');
      setColor4BCard('closed');
    }
  }, [gameOver])


  return (
    <>
      <div className='visor visor_4'>
        <div className='contPreguntas'>
          <h1 className='pregunta'>What is the main priority of the UAE Plant Genetic Resource Center?</h1>
          <ul className='grid'>
            <div>
              <img src='./ImgA.png' alt='ImgA' width='900px' className={color1} />
              <img src='./ImgA_Red.png' alt='ImgA' width='900px' className={color1B} />
            </div>
            <div>
              <img src='./ImgB.png' alt='ImgB' width='900px' className={color2} />
              <img src='./ImgB_Red.png' alt='ImgB' width='900px' className={color2B} />
            </div>
            <div>
              <img src='./ImgC.png' alt='ImgC' width='900px' className={color3} />
              <img src='./ImgC_Green.png' alt='ImgC' width='900px' className={color3B} />
            </div>
            <div>
              <img src='./ImgD.png' alt='ImgD' width='900px' className={color4} />
              <img src='./ImgD_Red.png' alt='ImgD' width='900px' className={color4B} />
            </div>
          </ul>
        </div>
      </div>
      <div className='carta'>
        <h1 className='preguntaCard'>What is the main priority of the UAE Plant Genetic Resource Center?</h1>
        <ul className='gridCard'>
          <div>
            <h2 className={color1Card} onClick={Pregunta1}>A</h2>
            <h2 className={color1BCard} >A</h2>
          </div>
          <div>
            <h2 className={color2Card} onClick={Pregunta2}>B</h2>
            <h2 className={color2BCard}>B</h2>
          </div>
          <div>
            <h2 className={color3Card} onClick={PreguntaAcertada}>C</h2>
            <h2 className={color3BCard}>C</h2>
          </div>
          <div>
            <h2 className={color4Card} onClick={Pregunta4}>D</h2>
            <h2 className={color4BCard}>D</h2>
          </div>
        </ul>
        <h1 className={siguiente} onClick={Siguiente}> SIGUIENTE PREGUNTA</h1>
      </div>
    </>
  )
}

export default CartaImg;