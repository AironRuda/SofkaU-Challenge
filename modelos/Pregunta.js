export class Pregunta {
    constructor(nivel, enunciado, correcto, opciones) {
        this.nivel = nivel;
        this.enunciado = enunciado;
        this.correcto = correcto;
        this.opciones = opciones.sort(()=>Math.random()-0.5);
    }
    opcionCorrecta (opcion) {
       return opcion === this.correcto ? true : false
    }
}