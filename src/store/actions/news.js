import data from "../../data/dummy-data";

export const FETCH_NEWS = "FETCH_NEWS";

export const fetchNews = () => ({
  type: FETCH_NEWS,
  payload: data.news,
});
