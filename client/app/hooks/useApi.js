import { useState, useEffect } from "react";
import cache from "../utilities/cache";

const baseURL = "http://localhost:3002/";

 const useFetch = async (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [first, setFirst] = useState(true)

  useEffect(() => {
    fetch(baseURL + url)
     .then(res => {
       if(res.ok) {
         const response = res.json()
         return response;
       }
       setError(res);
     })
     .then(data => {
       if((!first && data.length === 0) || data.name === 'baby' ) return
       cache.storeData(url, data);
       setData(data);
       setFirst(false)
     })
     .catch(err => {
       const data = cache.getData(url);
       data.ok ? setData(data.data) : null
       console.log(err);
       setError(err);
     })
      .finally(() => setLoading(false))
  }, [])
  
  return { data, loading, error }
};

export default {
  useFetch
}