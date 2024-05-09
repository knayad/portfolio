import axios from "axios";
import { API_URL } from "./context/reviewsContext";

axios.defaults.withCredentials = true;

axios.get(`${API_URL}/api/reviews`);
