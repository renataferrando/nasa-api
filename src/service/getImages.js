import axios from "axios";
import { apiKey, URL } from "../constants";

const getImages = ({ id, params }) => {
  return axios.get(`${URL}/${id}/photos?${params}&api_key=${apiKey}`);
};

export default getImages;
