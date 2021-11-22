import { Emitter } from './Emitter.js';
import { View } from './View.js';

const Timer = {
    //time: 0.1 * 60, // 25min X 60s = 25min, ou seja, estamos transformando minutos em segundos. Este é o estado inicial da aplicação
    time: 0.1 * 60,
    currentTime: 0,
    interval: null,

    timeToMinutes: time => Math.floor(time / 60),
    timeToSeconds: time => time % 60, // estamos pegando aqui o que sobrou da divisão acima e que arrendodamos

    formatTime: time => String(time).padStart(2, '0'), // se time tiver apenas 1 caracter, preenche com um 0 no início para ficarem 2 caracteres ( ex: 1 vira 01, 2 vira 02, etc)

    init(time) {
        Emitter.emit('countdown-start')

        Timer.time = time || Timer.time // ou eu passo um time ou utilizo o default de 1h
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000) // estamos passando a referência da função que queremos que setIntervale execute a cada 1s para que o setInterval registre ela 1o antes de executar
                                           // OBS.: setInterval não pára nunca se a gente não der uma condição para ela parar!!! Por isso estamos salvando na var interval, para limpar depois
    },
    countdown() {
        Timer.currentTime =  Timer.currentTime - 1 // fazendo a contagem regressiva
        
        const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
        const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))

        View.render({ // object property shorthand: quando o valor tem o mesmo nome da chave, daí podemos ocultar o valor
            minutes,
            seconds,
        })

        if (Timer.currentTime == 0) {
            clearInterval(Timer.interval)

            Emitter.emit('countdown-end')

            return
        }
    }
}

export { Timer }