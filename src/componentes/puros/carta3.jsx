import './cartaTipo2.css';
import React, { useEffect, useState } from "react";

const Carta3 = ({ siguienteSend, sendPuntos, sendPausa, segundo, gameOver }) => {



    const [siguiente, setSiguiente] = useState('closed');
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const [respCorrecta1, setRespCorrecta1] = useState(false);
    const [respCorrecta2, setRespCorrecta2] = useState(false);
    const [respCorrecta3, setRespCorrecta3] = useState(false);
    const [respCorrecta4, setRespCorrecta4] = useState(false);
    const [color1, setColor1] = useState('respuesta');
    const [color2, setColor2] = useState('respuesta');
    const [color3, setColor3] = useState('respuesta');
    const [color4, setColor4] = useState('respuesta');
    const [color1B, setColor1B] = useState('respuesta');
    const [color2B, setColor2B] = useState('respuesta');
    const [color3B, setColor3B] = useState('respuesta');
    const [color4B, setColor4B] = useState('respuesta');


    // const PreguntaAcertada = () => {
    //     setSiguiente('open')

    //     sendPausa(true);

    //     if (segundo < 5) {
    //         sendPuntos(100)
    //     } else if (5 < segundo < 10) {
    //         sendPuntos(66);
    //     } else if (10 < segundo) {
    //         sendPuntos(33)
    //     }
    // }


    const Siguiente = () => {

        siguienteSend(true);
        setSiguiente('closed');

        setColor1('respuesta');
        setColor2('respuesta');
        setColor3('respuesta');
        setColor4('respuesta');

    }

    useEffect(() => {
        if (gameOver) {

            setColor1('respuesta');
            setColor2('respuesta');
            setColor3('respuesta');
            setColor4('respuesta');
            setColor1B('respuesta');
            setColor2B('respuesta');
            setColor3B('respuesta');
            setColor4B('respuesta');

        }
    }, [gameOver])

    function Option1() {
        setOption1(true);
        setColor1('respuestaMarcada')
    }

    function respuesta1() {
        setColor1B('respuestaMarcada')
        console.log('respCorrecta1: ' + respCorrecta1)
        console.log('respCorrecta2: ' + respCorrecta2)
        console.log('respCorrecta3: ' + respCorrecta3)
        console.log('respCorrecta4: ' + respCorrecta4)
        if (option1) {
            setRespCorrecta1(true);
        }
    }

    function Option2() {
        setColor2('respuestaMarcada')
        setOption2(true);
    }

    function respuesta2() {
        setColor2B('respuestaMarcada')
        console.log('respCorrecta1: ' + respCorrecta1)
        console.log('respCorrecta2: ' + respCorrecta2)
        console.log('respCorrecta3: ' + respCorrecta3)
        console.log('respCorrecta4: ' + respCorrecta4)
        if (option2) {
            setRespCorrecta2(true);
        }
    }

    function Option3() {
        setColor3('respuestaMarcada')
        setOption3(true);
    }


    function respuesta3() {
        setColor3B('respuestaMarcada')
        console.log('respCorrecta1: ' + respCorrecta1)
        console.log('respCorrecta2: ' + respCorrecta2)
        console.log('respCorrecta3: ' + respCorrecta3)
        console.log('respCorrecta4: ' + respCorrecta4)
        if (option3) {
            setRespCorrecta3(true);
        }
    }

    function Option4() {
        setColor4('respuestaMarcada')

        setOption4(true);
    }


    function respuesta4() {
        setColor4B('respuestaMarcada')
        console.log('respCorrecta1: ' + respCorrecta1)
        console.log('respCorrecta2: ' + respCorrecta2)
        console.log('respCorrecta3: ' + respCorrecta3)
        console.log('respCorrecta4: ' + respCorrecta4)
        if (option4) {
            setRespCorrecta4(true);
        }
    }

    useEffect(() => {
        if (respCorrecta1 && respCorrecta2 && respCorrecta3 && respCorrecta4) {

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
    }, [respCorrecta1, respCorrecta2, respCorrecta3, respCorrecta4, segundo, sendPausa, sendPuntos])


    return (
        <div className='carta'>
            <h1 className='pregunta'>Pregunta3: Relaciona!</h1>
            <div className='pareja'>
                <h2 className={color1} onClick={Option1}>Opción 1</h2>
                <h2 className={color1B} onClick={respuesta1}>Respuesta 1</h2>
            </div>
            <div className='pareja'>
                <h2 className={color2} onClick={Option2}>Opción 2</h2>
                <h2 className={color2B} onClick={respuesta2}>Respuesta 2</h2>
            </div>
            <div className='pareja'>
                <h2 className={color3} onClick={Option3}>Opción 3</h2>
                <h2 className={color3B} onClick={respuesta3}>Respuesta 3</h2>
            </div>
            <div className='pareja'>
                <h2 className={color4} onClick={Option4}>Opción 4</h2>
                <h2 className={color4B} onClick={respuesta4}>Respuesta 4</h2>
            </div>
            <h1 className={siguiente} onClick={Siguiente}> SIGUIENTE PREGUNTA</h1>
        </div>
    );
}

export default Carta3;