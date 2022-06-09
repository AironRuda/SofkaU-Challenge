import { datosExtraidos } from "./datos/preguntas.js"
import { Juego } from './modelos/Juego.js'
import { Interfaz } from './modelos/Interfaz.js'

let nivel = 1
let puntuacion = 0

const cargarPagina = (preguntaActual, interfaz) => {
    interfaz.mostrarPuntuacion(puntuacion)
    interfaz.mostrarNivel(preguntaActual.nivel)
    interfaz.mostrarEnunciado(preguntaActual.enunciado)
    interfaz.mostrarOpciones(preguntaActual.opciones, (respuestaActual) => {
        if(preguntaActual.opcionCorrecta(respuestaActual) == true) {
            switch(nivel) {
                case 1:
                    puntuacion += 1
                    break
                case 2:
                    puntuacion += 2
                    break
                case 3:
                    puntuacion += 4
                    break
                case 4:
                    puntuacion += 8
                    break
                case 5:
                    puntuacion += 16
                    break
            }
            nivel += 1
            if(nivel >= 6){nivel = 5}
        } else {
            puntuacion = 0
            nivel = 1
        }
        main()
    })
    interfaz.botonSalir((actuarSalir)=> {
        if (actuarSalir == true) {
            nivel = 1
            console.log('Ha salido sin perder puntos')
        }
        main()
    })
}
function main () {
    const preguntaActual = new Juego(datosExtraidos).preguntaAleatoria(nivel)
    const interfaz = new Interfaz()
    cargarPagina(preguntaActual, interfaz)
}
main()

