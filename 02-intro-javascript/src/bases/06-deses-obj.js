const person = {
  name:'Tony',
  age: 45,
  pass: 'IronMan'
};

const {name:name2} = person;
// console.log(name2);

const returnPerson = ({name, pass, range = 'range'})=>{
  // console.log(name);
  return {
    nameKey: name,
    password: pass,
    latlng: {
      lat: 12.12312,
      lng: 32.32132
    }
  };
}

const { nameKey, password, latlng: {lat,lng} } = returnPerson(person);
// console.log(nameKey, password);
console.log(lat, lng);

