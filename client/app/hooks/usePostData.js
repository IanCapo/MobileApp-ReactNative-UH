const baseURL = "http://localhost:3002/";

export default function usePutData(url, body) {
  const options = {
    method: 'Post',
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  };
  const targetUrl = baseURL + url;

  fetch(targetUrl, options)
    .catch((err) => {
      console.log(err);
    })
};
