// tests/fusionador.test.ts
import { fusionarDatos } from '../src/utils/fusionador';

test('se fusiono personaje y clima correctamente!', () => {
  const personaje = { name: 'luke', homeworld: 'Lima' };
  const clima = { main: { temp: 300 }, weather: [{ description: 'caluroso' }] };

  const resultado = fusionarDatos(personaje, clima);

  expect(resultado.nombre).toBe('keko');
  expect(resultado.planeta).toBe('Lima');
  expect(resultado.clima.temperatura).toBe(26);
  expect(resultado.clima.descripcion).toBe('frio');
});
