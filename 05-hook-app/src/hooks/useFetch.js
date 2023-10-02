import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null
  });

  const getData = async () => {
    setState({...state, isLoading: true});

    try {
      const resp = await fetch(url);
      const data = await resp.json()
      setState({
        data,
        isLoading: false,
        error: null
      });
    } catch (err) {
      setState({
        data: null,
        isLoading: false,
        error: err.message
      });
      
    }

  }

  useEffect(()=> {
    getData();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error
  };
}
