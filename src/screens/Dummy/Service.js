import Axios from "axios";

import { BASE_URL } from "global/server";

export const get = () => Axios.get(`${BASE_URL}/`);