import axios from 'axios';

function vercelAPI() {
  return axios.create({ baseURL: process.env.REACT_APP_UNSPLASH_URL });
}

function TodoAPI() {
  return axios.create({ baseURL: process.env.REACT_APP_UNSPLASH_SAMPLEURL });
}

export { vercelAPI, TodoAPI };
