const baseURL = "http://localhost:3002/";

const usePostData = async (url, body) => {
  const options = {
    method: 'Post',
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  };
  const targetUrl = baseURL + url;

  let response = await fetch(targetUrl, options)
  let status = await response.status;

  return status;

};

export default usePostData;
