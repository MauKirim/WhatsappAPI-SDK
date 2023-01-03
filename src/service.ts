import axios from "axios";
import { Types } from "./types";

axios.defaults.baseURL = "https://api.maukirim.com/api/v1";
// set timeout to 10 seconds
axios.defaults.timeout = 10000;

export const sendMessage = (data: Types.SendMessageTypes, token: string) => {
  return axios
    .post("/messages/send", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data as Types.SendMessageResponse;
    })
    .catch((err) => {
      throw err;
    });
};
