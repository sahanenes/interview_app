import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/marvelSlice";
import useAxios from "./useAxios";

const useComicsCalls = () => {
  const dispatch = useDispatch();
  const { axiosStructure } = useAxios();
  const apiKey = process.env.REACT_APP_API_KEY;
  const hash = process.env.REACT_APP_HASH;
  const getComicsData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosStructure.get(
        `${url}?ts=1&apikey=${apiKey}&hash=${hash}`
      );
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getCharacters = () => getComicsData("characters");
  const getSeries = () => getComicsData("series");
  return { getCharacters, getSeries };
};

export default useComicsCalls;
