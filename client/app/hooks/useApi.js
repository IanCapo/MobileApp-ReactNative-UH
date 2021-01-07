// not in use anymore

import { useState, useEffect } from "react";
import cache from "../utilities/cache";

const baseURL = "http://localhost:3002/";

 const useFetch = async (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noData, setNoData] = useState(false);

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
       if((data.length === 0) || (data.name === 'baby')) {
        console.log('no data');
        setNoData(true)
        return
       } 
       cache.storeData(url, data);
       setData(data);
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