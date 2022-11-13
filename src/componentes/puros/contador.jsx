import React, { useState, useEffect } from 'react'
import './contador.css'

const Contador = ({sendContador, zeroToggle }) => {

  const [contador, setContador] = useState(0);

  useEffect(() => {
    if(zeroToggle){
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
    setContador(contador+1);
    console.log('Segundo desde contador: ' + contador)
    sendContador(contador);
  }


  return (
    <h3>TICK TACK: {contador} </h3>
  )
};

export default Contador;
