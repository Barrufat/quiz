import './pregunta1.css';
import React, { useEffect, useState } from "react";

const Pregunta1 = () => {

  const [primera, setPrimera] = useState(false);
  const [segunda, setSegunda] = useState(false);
  const [tercera, setTercera] = useState(false);
  const [cuarta, setCuarta] = useState(false);

  const [color1, setColor1] = useState('respuesta');
  const [color2, setColor2] = useState('respuesta');
  const [color3, setColor3] = useState('respuesta');
  const [color4, setColor4] = useState('respuesta');
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    primera ? setColor1('respuestaIncorrecta') : setColor1('respuesta');
    segunda ? setColor2('respuestaIncorrecta') : setColor2('respuesta');
    tercera ? setColor3('respuestaCorrecta') : setColor3('respuesta');
    cuarta ? setColor4('respuestaIncorrecta') : setColor4('respuesta');
  }, [toggleState, primera, segunda, tercera, cuarta])

  const ToggleClick = () => {
    setToggleState(!toggleState);
  };

  const Pregunta1 = () => {
    setPrimera(!primera);
    ToggleClick();
  }

  const Pregunta2 = () => {
    setSegunda(!segunda);
    ToggleClick();
  }
  const Pregunta3 = () => {
    setTercera(true);
    ToggleClick();
  }
  const Pregunta4 = () => {
    setCuarta(!cuarta);
    ToggleClick();
  }

  return (
    <div className='carta'>
      <h1 className='pregunta'>Pregunta1: Bla bla bla bla bla?</h1>
      <h2 className={color1} onClick={Pregunta1}>Respuesta 1</h2>
      <h2 className={color2} onClick={Pregunta2}>Respuesta 2</h2>
      <h2 className={color3} onClick={Pregunta3}>Respuesta 3</h2>
      <h2 className={color4} onClick={Pregunta4}>Respuesta 4</h2>
    </div>
  )
}

export default Pregunta1;