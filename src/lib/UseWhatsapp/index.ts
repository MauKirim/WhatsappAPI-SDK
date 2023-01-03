import { Types } from "../../types";
import { sendMessage } from "../../service";

const UseWhatsapp: ({ token }: { token: any }) => {
  request: (
    msdn: string,
    message: string,
    list_button?: Types.ListButton[]
  ) => Promise<Types.SendMessageResponse | void>;
} = ({ token }) => {
  const request = (
    msdn: string,
    message: string,
    list_button?: Types.ListButton[]
  ) => {
    return sendMessage(
      {
        msdn,
        message,
        list_button: list_button ?? undefined,
      },
      token
    )
      .then((res) => {
        return res.data as Types.SendMessageResponse;
      })
      .catch((err) => {
        throw err;
      });
  };

  return {
    request,
  };
};

export default UseWhatsapp;
