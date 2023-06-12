import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const useAxios = () => {
  const axiosStructure = axios.create({
    baseURL: BASE_URL,
  });

  return { axiosStructure };
};

export default useAxios;
