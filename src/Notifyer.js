const Notifyer = {
    async init() {
        const permission = await Notification.requestPermission()
        
        if (permission !== 'granted') {
            throw new Error('Permissão negada')
        }
    },
    notify({title, body, icon}) { // aqui {} não é um objeto, e sim uma desestruturação do objeto que está sendo passado
        return () => new Notification(title, {
            body,
            icon
        })
    }
}

export { Notifyer }