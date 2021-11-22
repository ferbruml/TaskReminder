function ControlWindow(win, tray) { // precisamos da tray para pegar o posicionamento dela ( já que muda ), e precisamos da win para reposicionar essa janela na tela de acordo com a tray
    function toggle() {
        if (win.isVisible()) {
            win.hide();
        }
        else {
            show()
        }
    }

    function show() {
        const { x, y } = getPosition();

        win.setPosition(x, y, 0)

        win.show()
        win.focus()
    }

    function getPosition() {
        const winBounds = win.getBounds();
        const trayBounds = tray.getBounds();

        const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2)) // estamos centralizando no meio da janela no eixo x
        //const y = Math.round(trayBounds.y + trayBounds.height + 3) -> esse código só funcionou no mac do professor
        const y = Math.round(trayBounds.y < 100 ? trayBounds.y + trayBounds.height + 3 : trayBounds.y - winBounds.height - 3)

        return {x, y}
    }

    return {
        toggle,
    }
}

module.exports = ControlWindow // aqui não podemos já executar a função, pois ela aguarda 2 argumentos que não temos neste momento