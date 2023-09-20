const persona = {
  nombre: 'tony',
  apellido: 'stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 124329,
    lat: 21.124,
    lng: 12.12453
  }
};

const persona2 = {...persona};
persona2.nombre = 'asdasd';

// console.table(persona);
console.log(persona);
console.log(persona2);
