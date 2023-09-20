
const personajes = ['Goku', 'Vegetta', 'Thrunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [,,p3] = personajes;
// console.log(p3);

const returnArray = ()=>{
  return ['ABC', '123'];
}

const [letr,num] = returnArray();
// console.log(letr,num);

const uses = (value) => {
  return [value, ()=>'Hello world']
}

const [names, setName] = uses('goku');
console.log(names, setName());
