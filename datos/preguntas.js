import { Pregunta } from '../modelos/Pregunta.js' //Se importa el objeto pregunta con métodos para ser construido
import { datos } from './datos.js' //Se importa la información del banco de preguntas
/*
    Se usa la función ".map" que recorre todos los elementos del banco de preguntas "datos"
    Cuando accede a uno de los elementos "datoPregunta", se le extrae la información que trae consigo
    (nivel, enunciado, correcto y opciones) y se asignan como parámetros al objeto de tipo "Pregunta"
    Generando así un arreglo con elementos de tipo "Pregunta" llamado "datosExtraidos" que 
    será exportado para su poorterior uso
*/
export const datosExtraidos = datos.map(datoPregunta => new Pregunta(datoPregunta.nivel, datoPregunta.enunciado, datoPregunta.correcto, datoPregunta.opciones))