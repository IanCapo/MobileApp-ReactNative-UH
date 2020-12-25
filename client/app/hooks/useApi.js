import { useState, useEffect } from "react";

const baseURL = "http://localhost:3002/";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(baseURL + url)
     .then(res => {
       if(res.ok) return res.json();
       setError(res);
     })
     .then(data => setData(data))
     .catch(err => {
       console.log(err);
       setError(err);
     })
     .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
};