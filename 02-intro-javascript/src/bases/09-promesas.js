import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const resp = getHeroeById(5);
//     resolve(resp);
//   }, 2000);
// });
//
// promesa.then((r) => {
//   console.log(r);
// });
  //
const getHeroeByIdAsync = (id) => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = getHeroeById(id);
      if (!resp)
        reject('Not found');
      resolve(resp);
    }, 2000);
  });


getHeroeByIdAsync(10)
  .then((heroe) => {
    console.log(heroe);
  })
  .catch(console.error)
