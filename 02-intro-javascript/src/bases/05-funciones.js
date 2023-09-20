function saludar(nombre) {
  return `Hola ${nombre}`;
}

// saludar = 30;
const saludar2 = function(nombre){
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => {
  return `Hola ${nombre}`;
};


const saludar4 = (nombre) => `Hola ${nombre}`;

console.log(saludar4('Goku'));
// console.log(saludar);

const getActiveUser = (name) => 
  ({
    uid: 'ABC123',
    username: name
  });

const activeUser = getActiveUser('Name');
console.log(activeUser);
