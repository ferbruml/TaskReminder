import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const notify = Notifyer.notify({
    title: "Hey!",
    body: "Hora de focar!"
})

const App = {
    async start() {
        try {
            const time = 0.1 * 60

            await Notifyer.init()
            
            /*
            Emitter.on('countdown-start', () => {
                Notifyer.notify({
                    title: 'Fernanda',
                    body: 'Eu sou eu'
                })
            })
            */
           // Este código faz a mesma coisa que o acima, mas neste estamos utilizando CLOSURES
           Emitter.on('countdown-start', notify)

            /*
            Emitter.on('countdown-end', () => {
                Timer.init()
            })
            */
           // mesma coisa que o código acima, mas utilizando closure ( passando Timer.init por referência )
           Emitter.on('countdown-end', Timer.init) // não estamos executando a função Timer.init, mas quando o evento 'countdown-end' ocorrer, ele executará a função

            Timer.init(/*time*/)
        }
        catch (err) {
            console.log(err.message) // essa message é o texto que escrevi quando criei o new Error('Permissão negada') no trhow da função
        }
    }
}

export { App }