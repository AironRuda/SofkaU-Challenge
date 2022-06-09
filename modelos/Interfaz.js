export class Interfaz {
    mostrarPuntuacion(puntuacion) {
        const mostrarPuntuacion = document.getElementById('puntuacion')
        mostrarPuntuacion.innerHTML = puntuacion
    }
    mostrarEnunciado(enunciado) {
        const mostrarEnunciado = document.getElementById('pregunta')
        mostrarEnunciado.innerHTML = enunciado
    }
    mostrarNivel(nivel) {
        const mostrarNivel = document.getElementById('nivel')
        mostrarNivel.innerHTML = nivel
    }
    mostrarOpciones (opciones, funcionalidad) {
        const mostrarOpciones = document.getElementById('opciones')
        mostrarOpciones.innerHTML = ''
        for (let i = 0; i < opciones.length; i ++) {
            const boton = document.createElement('button')
            boton.innerHTML = opciones[i]
            boton.className = 'btn'
            boton.addEventListener('click', () => funcionalidad(opciones[i]))
            mostrarOpciones.append(boton)
        }
    }
    botonSalir(actuarSalir) {
        const botonSalir = document.getElementById('btn_salir')
        botonSalir.innerHTML = 'salir'

        botonSalir.addEventListener('click', () => actuarSalir(true))
    }
}