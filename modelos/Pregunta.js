/*
    Creación de objeto "Pregunta" que requiere de atributos: nivel, enunciado, correcto (respuesta correcta)
    y opciones (posibles opciones disponibles)

    Cuenta con una función que compara la respuesta correcta con una opción suministrada a la función,
    en caso de coincidir, retorna true, si no coinciden retorna false.
*/

export class Pregunta {
    constructor(nivel, enunciado, correcto, opciones) {
        this.nivel = nivel;
        this.enunciado = enunciado;
        this.correcto = correcto;
        this.opciones = opciones.sort(()=>Math.random()-0.5);
    }
    /*
        Función encargada de comparar una opción suministrada con la opción correcta del objeto.
    */
    opcionCorrecta (opcion) {
       return opcion === this.correcto ? true : false
    }
}