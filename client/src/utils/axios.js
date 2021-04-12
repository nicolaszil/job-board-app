import axios from "axios";

import API from "../../config/api/endpoints";

const client = axios.create({ baseURL: API.BASE_URL });

export default client;
