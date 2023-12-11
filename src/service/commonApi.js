import axios from "axios";

//define a function for comman api call using axios libraary
export const commonApi = async (method, url, body, header) => {
  let config = {
    method,
    url,
    body,
    headers: header ? header : { "content-type": "applicatio/json" },
  };

  //  axios api call-create an instance
  return await axios(config)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
