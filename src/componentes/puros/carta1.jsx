import './cartaTipo1.css';
import React, { useEffect, useState } from "react";
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

const Carta1 = ({ siguienteSend, sendPuntos, sendPausa, segundo, gameOver, idioma }) => {

  const [siguiente, setSiguiente] = useState('closed');
  const [t, i18n] = useTranslation("global");


  const JQuerycode = () => {
    //inici
    $(".respuesta1").load("./SmallGreen.svg", function () {
      if (idioma == "en") {
        $(".respuesta1 #smallgreen-s-tspan22").html('What is the name of this plant?');
      } else if (idioma == "ar") {
        $(".respuesta1 #smallgreen-s-tspan22").html('azdgzdzg');
      }
    });

    $(".respuesta2").load("./SmallRed1.svg", function () {
      if (idioma == "en") {
        $(".respuesta2 #smallred1-s-tspan24").html('What is the name of this plant?');
      } else if (idioma == "ar") {
        $(".respuesta2 #smallred1-s-tspan24").html('azdgzdzg');
      }
    });

    $(".respuesta3").load("./SmallRed2.svg", function () {
      if (idioma == "en") {
        $(".respuesta3 #smallred2-s-tspan24").html('What is the name of this plant?');
      } else if (idioma == "ar") {
        $(".respuesta3 #smallred2-s-tspan24").html('azdgzdzg');
      }
    });

    $(".respuesta4").load("./SmallRojo3.svg", function () {
      if (idioma == "en") {
        $(".respuesta4 .tspan").html('What is the name of this plant?');
      } else if (idioma == "ar") {
        $(".respuesta4 .tspan").html('azdgzdzg');
      }
    });
  }

  useEffect(() => {
    JQuerycode();
  }, [])

  const PreguntaAcertada = () => {
   // document.getElementById("smallgreen").svgatorPlayer.play();
    setSiguiente('open')
    sendPausa(true);

    if (segundo < 5) {
      sendPuntos(100)
    } else if (5 < segundo < 10) {
      sendPuntos(66);
    } else if (10 < segundo) {
      sendPuntos(33)
    }
  }

  const Pregunta1 = () => {
    sendPuntos(-10)
    document.getElementById("smallred1").svgatorPlayer.play();
  }

  const Pregunta2 = () => {
    sendPuntos(-10)
    document.getElementById("smallred2").svgatorPlayer.play();
  }

  const Pregunta3 = () => {
    sendPuntos(-10)
    document.getElementById("uae_10_buttonmediumlargesmall-grey-and-color1").svgatorPlayer.play();
  }

  const Siguiente = () => {

    siguienteSend(true);
    setSiguiente('closed');

    // setColor1('respuesta');
    // setColor2('respuesta');
    // setColor3('respuesta');
    // setColor4('respuesta');
    // setColor1B('closed');
    // setColor2B('closed');
    // setColor3B('closed');
    // setColor4B('closed');

    // setColor1Card('respuestaCard1');
    // setColor2Card('respuestaCard1');
    // setColor3Card('respuestaCard1');
    // setColor4Card('respuestaCard1');
    // setColor1BCard('closed');
    // setColor2BCard('closed');
    // setColor3BCard('closed');
    // setColor4BCard('closed');
  }

  useEffect(() => {
    if (gameOver) {

      // setColor1('respuesta');
      // setColor2('respuesta');
      // setColor3('respuesta');
      // setColor4('respuesta');
      // setColor1B('closed');
      // setColor2B('closed');
      // setColor3B('closed');
      // setColor4B('closed');

      // setColor1Card('respuestaCard1');
      // setColor2Card('respuestaCard1');
      // setColor3Card('respuestaCard1');
      // setColor4Card('respuestaCard1');
      // setColor1BCard('closed');
      // setColor2BCard('closed');
      // setColor3BCard('closed');
      // setColor4BCard('closed');
    }
  }, [gameOver])


  return (
    <>
      <div className='visor visor_1'>
        <div className='contPreguntas'>
          <div className='preguntaCard'>
            <h1 className='pregunta'>{t("pregunta1")} </h1>
            <img className='imgCarta' src='./Carta1.png' alt='carta1' width='30%' />
            <div className='respuesta1' />
            <div className='respuesta2' />
            <div className='respuesta3' />
            <div className='respuesta4' />
          </div>
        </div>
      </div>


      <div className='carta'>
        <div className='preguntaCard'>
          <h1 className='preguntaCard'> {t("pregunta1")} </h1>
          <img className='imgCarta' src='./Carta1.png' alt='carta1' width='30%' />
          <div className='respuesta1' onClick={PreguntaAcertada} />
          <div className='respuesta2' onClick={Pregunta1} />
          <div className='respuesta3' onClick={Pregunta2} />
          <div className='respuesta4' onClick={Pregunta3} />
        </div>
        <h1 className={siguiente} onClick={Siguiente}> {t("siguientePregunta")} </h1>
      </div>
    </>
  )
}

export default Carta1;