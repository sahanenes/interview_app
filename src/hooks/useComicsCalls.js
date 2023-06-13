import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/marvelSlice";
import useAxios from "./useAxios";
import React from "react";
import { UserContext } from "../App";

const useComicsCalls = () => {
  const dispatch = useDispatch();
  const { offset, searching, searchingSeries } = React.useContext(UserContext);

  const { axiosStructure } = useAxios();
  const apiKey = process.env.REACT_APP_API_KEY;
  const hash = process.env.REACT_APP_HASH;
  const getComicsData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosStructure.get(
        `${url}?&limit=10&&offset=${offset}&ts=1&apikey=${apiKey}&hash=${hash}`
      );
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getCharacters = () => getComicsData("characters");
  const getSeries = () => getComicsData("series");

  const getComicsSearchData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosStructure.get(
        `${url}?&nameStartsWith=${searching}&limit=10&&offset=${offset}&ts=1&apikey=${apiKey}&hash=${hash}`
      );
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getComicsSearchDataSeries = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosStructure.get(
        `${url}?&titleStartsWith=${searchingSeries}&limit=10&&offset=${offset}&ts=1&apikey=${apiKey}&hash=${hash}`
      );
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getSearchCharacters = () => getComicsSearchData("characters");
  const getSearchSeries = () => getComicsSearchDataSeries("series");
  return { getCharacters, getSeries, getSearchCharacters, getSearchSeries };
};

export default useComicsCalls;
