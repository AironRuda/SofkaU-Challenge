export class Juego {

    score = 0;
    lvl = 0;

    constructor(pregunta) {
        this.pregunta = pregunta
    }
    
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
        this.pregunta = this.pregunta[Math.floor(Math.random()*(max - min + 1) + min)]
        return this.pregunta;
    }
}

