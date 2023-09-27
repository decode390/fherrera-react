import { getGifs } from "../../src/helpers/getGifs";

describe('test in useFetchGifs', () => {
  test('should be return array of gifs', async()=>{
    const gifs = await getGifs('One punch');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });

  });
})
