import axios from 'axios';

const API_KEY = '52919144-2a7b1f23e18b84640824764ee';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Axios error:', error);
      throw error;
    });
}
