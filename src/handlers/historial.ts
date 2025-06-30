import { obtenerHistorial } from '../utils/db';

export const historial = async (): Promise<any> => {
  try {
    const items = await obtenerHistorial();

    if (!items || !Array.isArray(items)) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: 'Error al obtener datos.' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(items),
    };
  } catch (error) {
    console.error('Error en historial:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Ex - Error al intentar obtener el historial.' }),
    };
  }
};
