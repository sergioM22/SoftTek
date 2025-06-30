import { guardarFusion } from '../utils/db';

export const almacenar = async (event: any): Promise<any> => {
  try {
    if (!event || !event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ msg: 'Faltan datos para el registro' }),
      };
    }

    const data = JSON.parse(event.body);
    await guardarFusion(data);

    return {
      statusCode: 201,
      body: JSON.stringify({ msg: 'guardado correctamente!' }),
    };
  } catch (error) {
    console.error('Error al guardar:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Ex - Error al guardar los datos...' }),
    };
  }
};