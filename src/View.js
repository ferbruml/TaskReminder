const View = {
    render({ minutes, seconds }) { 
        document.body.innerHTML = `
        <p>Nex reminder at</p>
        <span>${minutes}:${seconds}</span>
        `
    }
}

export { View }