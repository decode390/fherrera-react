import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('test in useFetchGifs hook', () => {
  test('should be keep loading on init', ()=>{
    const {result} = renderHook(()=>useFetchGifs('One punch'));
    const {images, isLoading} = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should be return data', async()=>{
    const {result} = renderHook(()=>useFetchGifs('One punch'));
    await waitFor(
      () => expect(result.current.isLoading).toBeFalsy()
    );

    expect(result.current.images.length).toBeGreaterThan(0);
  })
});
