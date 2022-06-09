import { datosExtraidos } from "./datos/preguntas.js" //Importan los datos extraídos del banco de pregunta
import { Juego } from './modelos/Juego.js' //Importan objeto seleccionador de preguntas según nivel
import { Interfaz } from './modelos/Interfaz.js' //Importan objeto que se mostrará elementos en el interfaz
/* 
    Se declaran variables como el nivel y la puntuacion
*/
let nivel = 1
let puntuacion = 0
/* 
    Con la pregunta seleccionada se extra su información de nivel, puntuación, enunciado y preguntas
    para ser presentados, una vez presentados se esperan estímulos en los botones
    
    Si se presiona una opción incorrecta, a nivel se le asigna un valor de 1 y se selecciona una nueva pregunta
    aleatoria de este nivel, asignando un valor de 0 a la puntuación.

    Si se presiona una opción correcta, nivel se incrementa en una unidad y se suma a puntuación un valor
    relacionado con el valor actual de nivel
*/
function cargarPagina(preguntaActual, interfaz) {
    interfaz.mostrarPuntuacion(puntuacion) //Asignacion de puntuacion a elemento HTML
    interfaz.mostrarNivel(preguntaActual.nivel) //Asignacion de nivel a elemento HTML
    interfaz.mostrarEnunciado(preguntaActual.enunciado) //Asignacion de enunciado a elemento HTML
    interfaz.mostrarOpciones(preguntaActual.opciones, (respuestaActual) => { //Asignacion de opciones a elementos HTML, y espera estimulo
        if (preguntaActual.opcionCorrecta(respuestaActual) == true) { //En caso de que el estímulo se genere en la opción correcta
            switch (nivel) {
                case 1: //Suma de puntos de preguntas de nivel 1
                    puntuacion += 1
                    break
                case 2: //Suma de puntos de preguntas de nivel 2
                    puntuacion += 2
                    break
                case 3: //Suma de puntos de preguntas de nivel 3
                    puntuacion += 4
                    break
                case 4: //Suma de puntos de preguntas de nivel 4
                    puntuacion += 8
                    break
                case 5: //Suma de puntos de preguntas de nivel 5
                    puntuacion += 16
                    break
            }
            nivel += 1 //Incremento de nivel
            if (nivel >= 6) { nivel = 5} //Se establece en 5 el límite máximo que el nivel puede alcanzar
        } else { //En caso de que el estímulo sea en una opción incorrecta
            puntuacion = 0 //Se reinicia el acumulado de puntos
            nivel = 1 //Se reasigna 1 al nivel
            console.log('Respuesta incorrecta, pierde los puntos')
        }
        main()
    })
    interfaz.botonSalir((actuarSalir) => { //Se esperan estimulos del boton salir
        if (actuarSalir == true) { //En caso de ser presionado se reasigna 1 al nivel sin perder puntos
            nivel = 1
            console.log('Ha salido sin perder puntos')
        }
        main()
    })
}
/* 
    Se crea un main que usa el método "preguntaAleatoria" para seleccionar una pregunta
    y se inicializan los componentes que se presentaran en el documento HTML

    Se emplean estos 2 elementos para preparar tan la información como la visualización de la misma
*/
function main () {
    const preguntaActual = new Juego(datosExtraidos).preguntaAleatoria(nivel)
    const interfaz = new Interfaz()
    cargarPagina(preguntaActual, interfaz)
}
main()

