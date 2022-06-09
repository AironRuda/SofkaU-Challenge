/*
    Se crea el objeto "juego" a correspondiente al banco de preguntas que estará en juego, por lo tanto
    se le debe entregar la información correspondiente al banco de preguntas con elementos tipo "pregunta".

    Cuenta con un método que, según el nivel proporcionado, entrega una pregunta al azar del nivel que se 
    le especificó
*/
export class Juego {
    /*
        Constructor que recibe el banco de preguntas
    */
    constructor(pregunta) {
        this.pregunta = pregunta
    }
    /*
        Metodo que, segun el nivel proporcionado selecionará un rango de prenguntas (dependiendo del indice)
        entre las cuales será seleccionada una al azar.

    */
    preguntaAleatoria (nivel) {
        let min = 0;
        let max = 0;
        switch (nivel){
            case 1: //Dificultad nivel 1
                min = 0
                max = 4
                break
            case 2: //Dificultad nivel 2
                 min = 5
                 max = 9
                 break
            case 3: //Dificultad nivel 3
                min = 10
                max = 14
                break
            case 4: //Dificultad nivel 4
                min = 15
                max = 19
                break
            case 5: //Dificultad nivel 5
                min = 20
                max = 24
                break
        }
        /*
            Genera un estero aleatorio dentro del rango establecido anteriormente, correspondiente 
            a un elemento dentro del banco de preguntas.
        */
        this.pregunta = this.pregunta[Math.floor(Math.random()*(max - min + 1) + min)]
        return this.pregunta; //Retoorna pregunta seleccionada
    }
}

