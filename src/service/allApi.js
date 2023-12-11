import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

// add user

export const addUser = async (body, header) => {
  // api
  commonApi("POST", `${BASE_URL}/add`, body, header);
};
