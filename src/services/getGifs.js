import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, id, title } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default function getGifs({
  limit = 25,
  keyword = "keith richard",
  rating,
} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=${rating}&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
