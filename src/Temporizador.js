import React, { useEffect , useState} from "react";
import './Temporizador.js';

const Temporizador = () => {

const [seconds,setSeconds] = useState(0);
const [minutes,setMinutes] = useState(0);

let temporizador;
useEffect(()=>{
    
temporizador = setInterval(() => {

    setSeconds(seconds+1);
        if(seconds===59){
            setMinutes(minutes+1);
            setSeconds(0);
        }

    }, 1000)

    return ()=>{ 
        clearInterval(temporizador);
    };
});

const reiniciar =()=>{
    setMinutes(0);
    setSeconds(0);
}

    return(
        <div className = "temporizador">
        <div className = "contenedor">
        <div className = "temp_contenedor">
        <h1>Temporizador</h1>
        <h1>{minutes<10? "0" + minutes: minutes}:{seconds<10? "0" + seconds: seconds}</h1>
        <button className = "reiniciar" onClick= {reiniciar}>Reiniciar </button>
        </div>
        </div>
        </div>
    )
}

export default Temporizador