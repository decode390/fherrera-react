const request = fetch(`https://reqres.in/api/users/2`);
request
  .then(r => r.json())
  .then(({data:{avatar}}) => {
    console.log(avatar);
    const img = document.createElement('img');
    img.src = avatar;
    document.body.append(img);
  })
  .catch(console.warn);
