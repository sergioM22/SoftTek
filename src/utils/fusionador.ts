import { v4 as uuidv4 } from 'uuid';

export const fusionarDatos = (personaje: any, clima: any) => {
  return {
    Fusionados: uuidv4(), //id dinamico
    personaje,
    clima,
    fecha: new Date().toISOString(),
  };
};
