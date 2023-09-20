const getImage = async() => {
  try {
    const resp = await fetch(`https://reqres.in/api/users/2`);
    const {data:{avatar}} = await resp.json();
    const img = document.createElement('img');
    img.src = avatar;
    document.body.append(img);
  } catch (err) {
    console.error(err);
  }
}

getImage();
