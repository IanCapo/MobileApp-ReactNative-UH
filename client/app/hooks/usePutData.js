
// not in use anymore

const baseURL = "http://localhost:3002/";

export default function usePutData(url, body) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const targetUrl = baseURL + url;

  fetch(targetUrl, options)
    .then(res => {
       res.json();
    }),
    (err) => {
      console.log(err);
    }
};

 