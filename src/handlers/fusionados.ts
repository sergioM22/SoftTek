import { getCharacters } from '../services/swapiService';
import { getWeatherByCity } from '../services/weatherService';
import { fusionarDatos } from '../utils/fusionador';
import { guardarFusion } from '../utils/db';


export const fusionados = async () => {
  try {
    const personajes = await getCharacters();
    const personaje = personajes[1]; 
    console.log("1. Obtuvo Personaje: ", personaje);
    const clima = await getWeatherByCity('Lima');
    console.log("2. Obtuvo Clima: ",clima);
    const fusion = fusionarDatos(personaje, clima);
    console.log("3. Fusionó Datos: ",fusion);
    await guardarFusion(fusion);
    console.log("4. Guardó Fusion. Finalizado!!!",);

    return {
      statusCode: 200,
      body: JSON.stringify(fusion),
    };
  } catch (error) {
    console.error('Error al FUSIONAR:', error); 
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Error interno /fusionados.ts',
        detalle: error instanceof Error ? error.message : 'revisar codigo',
      }),
    };
  }
};
