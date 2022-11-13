
import './App.css';

import Carta1 from './componentes/puros/carta1'; 
import Carta2 from './componentes/puros/carta2';
import Contador from './componentes/puros/contador';
import { useState, useEffect } from 'react';

function App() {

  const [display1, setDisplay1] = useState('cardOpen');
  const [display2, setDisplay2] = useState('cardClosed');
  const [segundo, setSegundo] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [zeroToggle, setZeroToggle] = useState (false);

  function TickTack(numero) {
    setZeroToggle(false);
    setSegundo(numero+1);
    console.log('Segundo desde App: ' + segundo);
  }

  function cambiarNumero(numero) {

    if (numero === 1) {
      setDisplay1('cardOpen');
      setDisplay2('cardClosed');
      console.log('Carta: ' + numero);
      console.log('Display1: ' + display1 + '  Display2: ' + display2)


    } else if (numero === 2) {
      setDisplay2('cardOpen');
      setDisplay1('cardClosed');
      console.log('Carta: ' + numero);
      console.log('Display2: ' + display2 + '  Display1: ' + display1)
    }
  }

  const Lanzar = () => {

    let min = 1;
    let max = 3;

    let numero = Math.random() * (max - min) + min;
    let numeroRedondo = Math.floor(numero);

    cambiarNumero(numeroRedondo);
    setGameOver(false);

    setZeroToggle(true);

  }
  
  useEffect(() => {
    if (segundo === 15) {
      setGameOver(true);

      let min = 1;
      let max = 3;
  
      let numero = Math.random() * (max - min) + min;
      let numeroRedondo = Math.floor(numero);

      if (numeroRedondo === 1) {
        setDisplay1('cardOpen');
        setDisplay2('cardClosed');
        console.log('Carta: ' + numeroRedondo);
        console.log('Display1: ' + display1 + '  Display2: ' + display2)
  
  
      } else if (numeroRedondo === 2) {
        setDisplay2('cardOpen');
        setDisplay1('cardClosed');
        console.log('Carta: ' + numeroRedondo);
        console.log('Display2: ' + display2 + '  Display1: ' + display1)
      }

      setGameOver(false);
      setZeroToggle(true);
  
    }
  }, [segundo, display1, display2])
  

  const siguientePregunta = (siguiente) => {
    if (siguiente){
      setGameOver(true);
      Lanzar();

    }
  }

  return (
    <div className='contenedor'>
      <Contador zeroToggle={zeroToggle} sendContador={TickTack} />
      <div className={display1}>
        <Carta1 segundo={segundo} gameOver={gameOver} siguienteSend={siguientePregunta} />
      </div>
      <div className={display2}>
        <Carta2 segundo={segundo} gameOver={gameOver} siguienteSend={siguientePregunta} />
      </div>
    </div>
  );
}


export default App;
