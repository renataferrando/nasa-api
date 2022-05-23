import axios from "axios";
import { apiKey, URL } from "../constants";

const getRovers = () => {
  return axios.get(`${URL}?api_key=${apiKey}`);
};

export default getRovers;
