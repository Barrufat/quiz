import React, { useState, useEffect } from 'react'
import './contador.css'

const Contador = ({ sendContador, clearToggle, zeroToggle }) => {

  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (zeroToggle) {
      setContador(0);
    }
  }, [zeroToggle])


  useEffect(() => {
    const timerID = setInterval(() => { Tick() }, 1000);

    return () => {
      clearInterval(timerID);
    }
  });

  const Tick = () => {
    console.log('ClearToggle: ' + clearToggle)
    if (!clearToggle) {
      setContador(contador + 1);
      sendContador(contador);
    } else if (clearToggle) {
      setContador(0);
      sendContador(contador);
    }
  };

  return (
    <h3 className='contador'>TICK TACK: {contador} </h3>
  )
};

export default Contador;
