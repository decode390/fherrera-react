
const apiKey = 'b7SNg88HpDDdqtzLRWCJE2LD9kdBzoVf'

export const getGifs = async(category)=>{
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`
  const resp = await fetch(url)
  const {data} = await resp.json();
  const gifs = data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url
  }));
  return gifs;
}
