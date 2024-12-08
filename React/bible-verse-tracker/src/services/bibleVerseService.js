import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getAllVerses = async () => {
  return axios.get(`${BASE_URL}/bibleverses`);
};

export const getVerseById = async (verseId) => {
  return axios.get(`${BASE_URL}/bibleverses/${verseId}`);
};

export const createVerse = async (verse) => {
  return axios.post(`${BASE_URL}/bibleverses`, verse);
};

export const updateVerse = async (verseId, updatedVerse) => {
  return axios.put(`${BASE_URL}/bibleverses/${verseId}`, updatedVerse);
};

export const deleteVerse = async (verseId) => {
  return axios.delete(`${BASE_URL}/bibleverses/${verseId}`);
};

export const getFavorites = async () => {
  return axios.get(`${BASE_URL}/favorites`);
};

export const addToFavorites = async (favorite) => {
  return axios.post(`${BASE_URL}/favorites`, favorite);
};

export const deleteFavorite = async (favoriteId) => {
  return axios.delete(`${BASE_URL}/favorites/${favoriteId}`);
};
