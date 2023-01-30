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

    if (!clearToggle) {
      setContador(contador + 1);
      sendContador(contador);
    } else if (clearToggle) {
      setContador(0);
      sendContador(contador);
    }
  };

  return (
    <>
      {/* <h3 className='contador'>Tiempo: {contador} </h3> */}
      <div className="progressbar">
        <div style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          border: "solid 1px #819C6D",
          borderRadius: "100px",
        }} />
        <div style={{
          position:"absolute",
          margin: '25px 0px 0px 15px',
          height: "50%",
          width: `${contador * 4}%`,
          backgroundColor: "#819C6D",
          transition: "width 4s",
          borderRadius: "100px",
        }}></div>
      </div>
    </>
  )
};

export default Contador;
