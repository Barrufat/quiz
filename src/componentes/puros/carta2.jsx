import './cartaTipo1.css';
import React, { useEffect, useState } from "react";

const Carta2 = ({ siguienteSend, segundo, gameOver }) => {

  console.log('Segundo desde Carta2 ' + segundo);

  const [primera, setPrimera] = useState(false);
  const [segunda, setSegunda] = useState(false);
  const [tercera, setTercera] = useState(false);
  const [cuarta, setCuarta] = useState(false);

  const [color1, setColor1] = useState('respuesta');
  const [color2, setColor2] = useState('respuesta');
  const [color3, setColor3] = useState('respuesta');
  const [color4, setColor4] = useState('respuesta');

  const [toggleState, setToggleState] = useState(false);
  const [siguiente, setSiguiente] = useState('closed');


  useEffect(() => {
    primera ? setColor1('respuestaCorrecta') : setColor3('respuesta');
    tercera ? setColor3('respuestaIncorrecta') : setColor3('respuesta');
    segunda ? setColor2('respuestaIncorrecta') : setColor2('respuesta');
    cuarta ? setColor4('respuestaIncorrecta') : setColor4('respuesta');
    if (primera) {
      setSiguiente('open');
    }
  }, [toggleState, primera, segunda, tercera, cuarta])

  const ToggleClick = () => {
    setToggleState(!toggleState);
  };

  const PreguntaAcertada = () => {
    setPrimera(true);
    ToggleClick();
    if (segundo < 5) {
      console.log('GANAS 100');
    } else if (5 < segundo < 10) {
      console.log('GANAS 66');
    } else if (10 < segundo) {
      console.log('GANAS 33')
    }
  }

  const Pregunta2 = () => {
    setSegunda(!segunda);
    ToggleClick();
  }
  const Pregunta3 = () => {
    setTercera(!tercera);
    ToggleClick();
  }
  const Pregunta4 = () => {
    setCuarta(!cuarta);
    ToggleClick();
  }

  const [siguienteToggle, setSiguienteToggle] = useState(false);

  const Siguiente = () => {

    setSiguienteToggle(true);
    siguienteSend(siguienteToggle);

    setSiguiente('closed');
    setPrimera(false);

    setColor1('respuesta');
    setColor2('respuesta');
    setColor3('respuesta');
    setColor4('respuesta');
  }

  useEffect(() => {
    if (gameOver) {

      setSiguiente('closed');
      setPrimera(false);
  
      setColor1('respuesta');
      setColor2('respuesta');
      setColor3('respuesta');
      setColor4('respuesta');
    }
  }, [gameOver])
  


  return (
    <div className='carta'>
      <h1 className='pregunta'>Pregunta2: Bla bla bla bla bla?</h1>
      <h2 className={color1} onClick={PreguntaAcertada}>Respuesta 1</h2>
      <h2 className={color2} onClick={Pregunta2}>Respuesta 2</h2>
      <h2 className={color3} onClick={Pregunta3}>Respuesta 3</h2>
      <h2 className={color4} onClick={Pregunta4}>Respuesta 4</h2>
      <h1 className={siguiente} onClick={Siguiente}> SIGUIENTE PREGUNTA</h1>
    </div>
  )
}

export default Carta2;