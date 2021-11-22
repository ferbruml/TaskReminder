const Emitter = {
    events: { // eventos que poderão ser disparados
        //click: () => {} // registro nesse evento de click a função que rodará quando o evento for disparado 
    },

    on(event, cb) { // event = nome do evento que quero registrar, cb = callback
        Emitter.events[event] = Emitter.events[event] || []// é o mesmo que Emitter.events.click, supondo que o event seja 'click'
        Emitter.events[event].push(cb)
    },
    
    emit(event, ...args) {
        if (event in Emitter.events === false) {
            return
        }

        //Emitter.events[event][0]()
        Emitter.events[event].forEach((e) => { // SUBSCRIBERS escutando e executando o(s) evento(s) recebido(s)
            e(...args)
        })
    }
}

// Aqui estmos registrando os eventos - são os SUBSCRIBERS                                                                                                                                                                                              
Emitter.on('click', () => console.log('cliquei'))
Emitter.on('click', () => console.log('cliquei 2'))

// Aqui estamos chamando um dos eventos click
//Emitter.events.click[1]() é o PUBLISHER e click[1]() é o TOPIC/CHANNEL
Emitter.emit('click', 1, 2, 3) // PUBLISHER disparando o evento

export { Emitter }