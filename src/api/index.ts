import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const randomAnime = () => {
  try {
    const response = axios.get(`${URL}/random/anime`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const genresAnime = () => {
  try {
    const response = axios.get(`${URL}/genres/anime`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const recommendationsAnime = () => {
  try {
    const response = axios.get(`${URL}/recommendations/anime`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTopAnime = (params?: string) => {
  try {
    const response = axios.get(`${URL}/top/anime${params}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeCharacters = (id: number) => {
  try {
    const response = axios.get(`${URL}/anime/${id}/characters`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCharactersAnime = (id: number) => {
  try {
    const response = axios.get(`${URL}/characters/${id}/anime`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCharactersPictures = (id: number) => {
  try {
    const response = axios.get(`${URL}/characters/${id}/pictures`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCharactersFullById = (id: number) => {
  try {
    const response = axios.get(`${URL}/characters/${id}/full`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeById = (id: number) => {
  try {
    const response = axios.get(`${URL}/anime/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
