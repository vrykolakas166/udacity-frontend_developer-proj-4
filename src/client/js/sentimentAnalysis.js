async function getApiKeyFromServer() {
  try {
    // adjust url on running enviroment
    const res = await fetch("http://localhost:8081/getApiKey");
    const data = await res.json();
    return data.api_key;
  } catch (error) {
    throw error;
  }
}

async function doSentimentAnalysis(url) {
  try {
    const api_key = await getApiKeyFromServer();
    const end_point = "https://api.meaningcloud.com/sentiment-2.1";

    const res = await fetch(`${end_point}?key=${api_key}&lang=en&url=${url}`, {
      method: "POST",
    });

    return res.json();
  } catch (error) {
    throw error;
  }
}

export { doSentimentAnalysis };
