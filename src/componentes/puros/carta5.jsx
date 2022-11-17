import './cartaTipo2.css';
import React, { useEffect, useState } from "react";

const Carta5 = ({ siguienteSend, sendPuntos, sendPausa, segundo, gameOver }) => {



    const [siguiente, setSiguiente] = useState('closed');
    const [hasFallado, setHasFallado] = useState('closed');
    const [segundoDeAcierto, setSegundoDeAcierto] = useState(0);
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

        if (segundoDeAcierto < 10) {
            sendPuntos(100)
        } else if (5 < segundoDeAcierto < 15) {
            sendPuntos(66);
        } else if (15 < segundoDeAcierto) {
            sendPuntos(33)
        }

        siguienteSend(true);
        setSiguiente('closed');

        setColor1('respuesta');
        setColor2('respuesta');
        setColor3('respuesta');
        setColor4('respuesta');
        setColor1B('respuesta');
        setColor2B('respuesta');
        setColor3B('respuesta');
        setColor4B('respuesta');

        console.log('Opcion1: ' + option1 + ' Respuesta1: ' + respuesta1 + ' RespCorrecta1: '+ respCorrecta1)
        console.log('Opcion2: ' + option2 + ' Respuesta2: ' + respuesta2 + ' RespCorrecta2: '+ respCorrecta2)
        console.log('Opcion3: ' + option3 + ' Respuesta3: ' + respuesta3 + ' RespCorrecta3: '+ respCorrecta3)
        console.log('Opcion4: ' + option4 + ' Respuesta4: ' + respuesta4 + ' RespCorrecta4: '+ respCorrecta4)
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

        console.log('Opcion1: ' + option1 + ' Respuesta1: ' + respuesta1 + ' RespCorrecta1: '+ respCorrecta1)
        console.log('Opcion2: ' + option2 + ' Respuesta2: ' + respuesta2 + ' RespCorrecta2: '+ respCorrecta2)
        console.log('Opcion3: ' + option3 + ' Respuesta3: ' + respuesta3 + ' RespCorrecta3: '+ respCorrecta3)
        console.log('Opcion4: ' + option4 + ' Respuesta4: ' + respuesta4 + ' RespCorrecta4: '+ respCorrecta4)
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

    function Respuesta1() {
        setColor1B('respuestaMarcada')
        setRespuesta1(true);
        console.log('respCorrecta1: ' + respCorrecta1)
        console.log('respCorrecta2: ' + respCorrecta2)
        console.log('respCorrecta3: ' + respCorrecta3)
        console.log('respCorrecta4: ' + respCorrecta4)

        if (option1) {
            setRespCorrecta1(true);
        } else {
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
    }

    function Option2() {
        setColor2('respuestaMarcada')
        setOption2(true);
    }

    function Respuesta2() {
        setColor2B('respuestaMarcada')
        setRespuesta2(true);

        console.log('respCorrecta1: ' + respCorrecta1)
        console.log('respCorrecta2: ' + respCorrecta2)
        console.log('respCorrecta3: ' + respCorrecta3)
        console.log('respCorrecta4: ' + respCorrecta4)

        if (option2) {
            setRespCorrecta2(true);
        } else {
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
    }

    function Option3() {
        setColor3('respuestaMarcada')
        setOption3(true);
    }


    function Respuesta3() {
        setColor3B('respuestaMarcada')
        setRespuesta3(true);

        console.log('respCorrecta1: ' + respCorrecta1)
        console.log('respCorrecta2: ' + respCorrecta2)
        console.log('respCorrecta3: ' + respCorrecta3)
        console.log('respCorrecta4: ' + respCorrecta4)
        if (option3) {
            setRespCorrecta3(true);
        } else {
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setOption4(false);
        }
    }

    function Option4() {
        setColor4('respuestaMarcada')

        setOption4(true);
    }


    function Respuesta4() {
        setColor4B('respuestaMarcada')
        setRespuesta4(true);

        console.log('respCorrecta1: ' + respCorrecta1)
        console.log('respCorrecta2: ' + respCorrecta2)
        console.log('respCorrecta3: ' + respCorrecta3)
        console.log('respCorrecta4: ' + respCorrecta4)
        if (option4) {
            setRespCorrecta4(true);
        } else {
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
                setSegundoDeAcierto(segundo);

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

                console.log('Opcion1: ' + option1 + ' Respuesta1: ' + respuesta1 + ' RespCorrecta1: '+ respCorrecta1)
                console.log('Opcion2: ' + option2 + ' Respuesta2: ' + respuesta2 + ' RespCorrecta2: '+ respCorrecta2)
                console.log('Opcion3: ' + option3 + ' Respuesta3: ' + respuesta3 + ' RespCorrecta3: '+ respCorrecta3)
                console.log('Opcion4: ' + option4 + ' Respuesta4: ' + respuesta4 + ' RespCorrecta4: '+ respCorrecta4)

            } else {
                setHasFallado('openFallo');
                sendPuntos(-10);
                sendPausa(true);
                setColor1('respuesta');
                setColor2('respuesta');
                setColor3('respuesta');
                setColor4('respuesta');
                setColor1B('respuesta');
                setColor2B('respuesta');
                setColor3B('respuesta');
                setColor4B('respuesta');
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
        <div className='carta'>
            <h1 className='pregunta'>Pregunta5: Relaciona!</h1>
            <div className='pareja'>
                <h2 className={color1} onClick={Option1}>Opción 1</h2>
                <h2 className={color1B} onClick={Respuesta1}>Respuesta 1</h2>
            </div>
            <div className='pareja'>
                <h2 className={color2} onClick={Option2}>Opción 2</h2>
                <h2 className={color2B} onClick={Respuesta2}>Respuesta 2</h2>
            </div>
            <div className='pareja'>
                <h2 className={color3} onClick={Option3}>Opción 3</h2>
                <h2 className={color3B} onClick={Respuesta3}>Respuesta 3</h2>
            </div>
            <div className='pareja'>
                <h2 className={color4} onClick={Option4}>Opción 4</h2>
                <h2 className={color4B} onClick={Respuesta4}>Respuesta 4</h2>
            </div>
            <h1 className={siguiente} onClick={Siguiente}> Pregunta acertada! </h1>
            <h1 className={hasFallado} onClick={TryAgain}> PRUEVA OTRA VEZ</h1>
        </div>
    );
}

export default Carta5;