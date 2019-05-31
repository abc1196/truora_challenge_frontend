import axios from "axios";

const BASE_URL = "http://localhost:4000/api/challenge/v1";

export default axios.create({ baseURL: BASE_URL });
