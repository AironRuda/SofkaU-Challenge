/* 
    Se crea una clase que asigna mediante id identidad de la informacion que se presentará en el interfaz
*/

export class Interfaz {
    /*
        Asigna el valor de puntuación, al id "puntuacion", 
        que se usará en el documento HTML para presentar la puntuación
    */
    mostrarPuntuacion(puntuacion) {
        const mostrarPuntuacion = document.getElementById('puntuacion')
        mostrarPuntuacion.innerHTML = puntuacion
    }
    /*
        Asigna el valor de enunciado, al id "pregunta", 
        que se usará en el documento HTML para presentar el enunciado de la pregunta
    */
    mostrarEnunciado(enunciado) {
        const mostrarEnunciado = document.getElementById('pregunta')
        mostrarEnunciado.innerHTML = enunciado
    }
    /*
        Asigna el valor de nivel, al id "nivel", 
        que se usará en el documento HTML para presentar la nivel
    */
    mostrarNivel(nivel) {
        const mostrarNivel = document.getElementById('nivel')
        mostrarNivel.innerHTML = nivel
    }
    /* 
        Se recorre el arreglo de las opciones, creando botones, asignándoles el valor al interior de cada opción, 
        se le asigna el nameClass de "btn" para implementarlo en el documento HTML, agregándole una función.
    */
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
    /*
        Se le asigna una funcionalidad al botón de salir, y se asigna al id "btn_salir"
        que se usará en el documento HTML para presentar el botón y actuar dependiendo se es oprimido o no
    */
    botonSalir(actuarSalir) {
        const botonSalir = document.getElementById('btn_salir')
        botonSalir.innerHTML = 'salir'

        botonSalir.addEventListener('click', () => actuarSalir(true))
    }
}