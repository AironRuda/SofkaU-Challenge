import { Pregunta } from '../modelos/Pregunta.js'
import { datos } from './datos.js'

export const datosExtraidos = datos.map(datoPregunta => new Pregunta(datoPregunta.nivel, datoPregunta.enunciado, datoPregunta.correcto, datoPregunta.opciones))