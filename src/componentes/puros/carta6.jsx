import './cartaTipo2.css';
import React, { useEffect, useState } from "react";

const Carta6 = ({ siguienteSend, sendPuntos, sendPausa, segundo, gameOver }) => {



    const [siguiente, setSiguiente] = useState('closed');
    const [hasFallado, setHasFallado] = useState('closed');

    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);

    const [respuesta1, setRespuesta1] = useState(false);
    const [respuesta2, setRespuesta2] = useState(false);
    const [respuesta3, setRespuesta3] = useState(false);
    const [respuesta4, setRespuesta4] = useState(false);

    const [respCorrecta1, setRespCorrecta1] = useState(false);
    const [respCorrecta2, setRespCorrecta2] = useState(false);
    const [respCorrecta3, setRespCorrecta3] = useState(false);
    const [respCorrecta4, setRespCorrecta4] = useState(false);

    const [color1, setColor1] = useState('respuestaTipo2');
    const [color2, setColor2] = useState('respuestaTipo2');
    const [color3, setColor3] = useState('respuestaTipo2');
    const [color4, setColor4] = useState('respuestaTipo2');

    const [color1B, setColor1B] = useState('respuestaTipo2');
    const [color2B, setColor2B] = useState('respuestaTipo2');
    const [color3B, setColor3B] = useState('respuestaTipo2');
    const [color4B, setColor4B] = useState('respuestaTipo2');

    const [color1Card, setColor1Card] = useState('respuestaTipo2Card');
    const [color2Card, setColor2Card] = useState('respuestaTipo2Card');
    const [color3Card, setColor3Card] = useState('respuestaTipo2Card');
    const [color4Card, setColor4Card] = useState('respuestaTipo2Card');

    const [color1BCard, setColor1BCard] = useState('respuestaTipo2Card');
    const [color2BCard, setColor2BCard] = useState('respuestaTipo2Card');
    const [color3BCard, setColor3BCard] = useState('respuestaTipo2Card');
    const [color4BCard, setColor4BCard] = useState('respuestaTipo2Card');

    const [linea1, setLinea1] = useState('./1-0.png');
    const [linea2, setLinea2] = useState('./2-0.png');
    const [linea3, setLinea3] = useState('./3-0.png');
    const [linea4, setLinea4] = useState('./4-0.png');



    const Siguiente = () => {

        siguienteSend(true);
        setSiguiente('closed');

        setColor1('respuestaTipo2');
        setColor2('respuestaTipo2');
        setColor3('respuestaTipo2');
        setColor4('respuestaTipo2');
        setColor1B('respuestaTipo2');
        setColor2B('respuestaTipo2');
        setColor3B('respuestaTipo2');
        setColor4B('respuestaTipo2');

        setColor1Card('respuestaTipo2Card');
        setColor2Card('respuestaTipo2Card');
        setColor3Card('respuestaTipo2Card');
        setColor4Card('respuestaTipo2Card');
        setColor1BCard('respuestaTipo2Card');
        setColor2BCard('respuestaTipo2Card');
        setColor3BCard('respuestaTipo2Card');
        setColor4BCard('respuestaTipo2Card');
    }

    const TryAgain = () => {
        setHasFallado('closed');
        sendPausa(false);

        setOption1(false);
        setOption2(false);
        setOption3(false);
        setOption4(false);
        setRespuesta1(false);
        setRespuesta2(false);
        setRespuesta3(false);
        setRespuesta4(false);
        setRespCorrecta1(false);
        setRespCorrecta2(false);
        setRespCorrecta3(false);
        setRespCorrecta4(false);
        setLinea1('./1-0.png');
        setLinea2('./2-0.png');
        setLinea3('./3-0.png');
        setLinea4('./4-0.png');
    }

    useEffect(() => {
        if (gameOver) {

            setColor1('respuestaTipo2');
            setColor2('respuestaTipo2');
            setColor3('respuestaTipo2');
            setColor4('respuestaTipo2');
            setColor1B('respuestaTipo2');
            setColor2B('respuestaTipo2');
            setColor3B('respuestaTipo2');
            setColor4B('respuestaTipo2');

            setColor1Card('respuestaTipo2Card');
            setColor2Card('respuestaTipo2Card');
            setColor3Card('respuestaTipo2Card');
            setColor4Card('respuestaTipo2Card');
            setColor1BCard('respuestaTipo2Card');
            setColor2BCard('respuestaTipo2Card');
            setColor3BCard('respuestaTipo2Card');
            setColor4BCard('respuestaTipo2Card');

        }
    }, [gameOver])

    function Option1() {
        setOption1(true);
        setColor1('respuestaMarcada')
        setColor1Card('respuestaMarcadaCard')
    }

    function Respuesta1() {
        setColor1B('respuestaMarcada')
        setColor1BCard('respuestaMarcadaCard')
        setRespuesta1(true);


        if (option1) {
            setRespCorrecta1(true);
            setLinea1('./1-1.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        } else if (option2) {
            setLinea2('./2-1.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
        else if (option3) {
            setLinea3('./3-1.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        } else if (option4) {
            setLinea4('./4-1.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
    }

    function Option2() {
        setColor2('respuestaMarcada')
        setColor2Card('respuestaMarcadaCard')
        setOption2(true);
    }

    function Respuesta2() {
        setColor2B('respuestaMarcada')
        setColor2BCard('respuestaMarcadaCard')
        setRespuesta2(true);

        if (option1) {
            setLinea1('./1-2.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        } else if (option2) {
            setRespCorrecta2(true);
            setLinea2('./2-2.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
        else if (option3) {
            setLinea3('./3-2.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        } else if (option4) {
            setLinea4('./4-2.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
    }

    function Option3() {
        setColor3('respuestaMarcada')
        setColor3Card('respuestaMarcadaCard')
        setOption3(true);
    }


    function Respuesta3() {
        setColor3B('respuestaMarcada')
        setColor3BCard('respuestaMarcadaCard')
        setRespuesta3(true);

        if (option1) {
            setLinea1('./1-3.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        } else if (option2) {
            setLinea2('./2-3.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
        else if (option3) {
            setRespCorrecta3(true);
            setLinea3('./3-3.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        } else if (option4) {
            setLinea4('./4-3.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
    }

    function Option4() {
        setColor4('respuestaMarcada')
        setColor4Card('respuestaMarcadaCard')

        setOption4(true);
    }


    function Respuesta4() {
        setColor4B('respuestaMarcada')
        setColor4BCard('respuestaMarcadaCard')
        setRespuesta4(true);

        if (option1) {
            setLinea1('./1-4.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        } else if (option2) {
            setLinea2('./2-4.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
        else if (option3) {
            setLinea3('./3-4.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        } else if (option4) {
            setRespCorrecta4(true);
            setLinea4('./4-4.png');
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
    }

    useEffect(() => {
        if (respuesta1 && respuesta2 && respuesta3 && respuesta4) {
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

                setOption1(false);
                setOption2(false);
                setOption3(false);
                setOption4(false);
                setRespuesta1(false);
                setRespuesta2(false);
                setRespuesta3(false);
                setRespuesta4(false);
                setRespCorrecta1(false);
                setRespCorrecta2(false);
                setRespCorrecta3(false);
                setRespCorrecta4(false);

            } else {
                setHasFallado('openFallo');
                sendPuntos(-10);
                sendPausa(true);
                setColor1('respuestaTipo2');
                setColor2('respuestaTipo2');
                setColor3('respuestaTipo2');
                setColor4('respuestaTipo2');
                setColor1B('respuestaTipo2');
                setColor2B('respuestaTipo2');
                setColor3B('respuestaTipo2');
                setColor4B('respuestaTipo2');
                setColor1Card('respuestaTipo2Card');
                setColor2Card('respuestaTipo2Card');
                setColor3Card('respuestaTipo2Card');
                setColor4Card('respuestaTipo2Card');
                setColor1BCard('respuestaTipo2Card');
                setColor2BCard('respuestaTipo2Card');
                setColor3BCard('respuestaTipo2Card');
                setColor4BCard('respuestaTipo2Card');
                setOption1(false);
                setOption2(false);
                setOption3(false);
                setOption4(false);
                setRespuesta1(false);
                setRespuesta2(false);
                setRespuesta3(false);
                setRespuesta4(false);
            }
        }
    }, [respCorrecta1, respCorrecta2, respCorrecta3, respCorrecta4, respuesta1, respuesta2,
        respuesta3, respuesta4, option1, option2, option3, option4, segundo, sendPausa, sendPuntos])


    return (
        <>
            <div className='visor visor_6'>
                <h1 className='pregunta'>Pregunta6: Relaciona!</h1>
                <div className='pareja'>
                    <div className='columnaPreguntas'>
                        <h2 className={color1}>Opción 1</h2>
                        <h2 className={color2}>Opción 2</h2>
                        <h2 className={color3}>Opción 3</h2>
                        <h2 className={color4}>Opción 4</h2>
                    </div>
                    <div className='columnaLinea'>
                        <img className='linea' src={linea1} alt={linea1} width='115px' />
                        <img className='linea' src={linea2} alt={linea2} width='115px' />
                        <img className='linea' src={linea3} alt={linea3} width='115px' />
                        <img className='linea' src={linea4} alt={linea4} width='115px' />
                    </div>
                    <div className='columnaRespuestas'>
                        <h2 className={color1B}>Respuesta 1</h2>
                        <h2 className={color2B}>Respuesta 2</h2>
                        <h2 className={color3B}>Respuesta 3</h2>
                        <h2 className={color4B}>Respuesta 4</h2>
                    </div>
                </div>
            </div>
            <div className='carta'>
                <h1 className='preguntaCard'>Pregunta6: Relaciona!</h1>
                <div className='pareja'>
                    <div className='columnaPreguntas'>
                        <h2 className={color1Card} onClick={Option1}>Opción 1</h2>
                        <h2 className={color2Card} onClick={Option2}>Opción 2</h2>
                        <h2 className={color3Card} onClick={Option3}>Opción 3</h2>
                        <h2 className={color4Card} onClick={Option4}>Opción 4</h2>
                    </div>
                    <div className='columnaLineaCard'>
                        <img className='linea' src={linea1} alt={linea1} width='55px' />
                        <img className='linea' src={linea2} alt={linea2} width='55px' />
                        <img className='linea' src={linea3} alt={linea3} width='55px' />
                        <img className='linea' src={linea4} alt={linea4} width='55px' />
                    </div>
                    <div className='columnaRespuestas'>
                        <h2 className={color1BCard} onClick={Respuesta1}>Respuesta 1</h2>
                        <h2 className={color2BCard} onClick={Respuesta2}>Respuesta 2</h2>
                        <h2 className={color3BCard} onClick={Respuesta3}>Respuesta 3</h2>
                        <h2 className={color4BCard} onClick={Respuesta4}>Respuesta 4</h2>
                    </div>
                </div>
                <h1 className={siguiente} onClick={Siguiente}> Pregunta acertada! </h1>
                <h1 className={hasFallado} onClick={TryAgain}> PRUEBA OTRA VEZ</h1>
            </div>
        </>

    );
}

export default Carta6;