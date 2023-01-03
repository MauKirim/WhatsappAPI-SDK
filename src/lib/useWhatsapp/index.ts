import { Types } from "../../types";
import { sendMessage } from "../../service";

const useWhatsapp: ({ token }: { token: any }) => {
  request: (
    msdn: string,
    message: string,
    list_button?: Types.ListButton[]
  ) => Promise<boolean>;
} = ({ token }) => {
  const request = async (
    msdn: string,
    message: string,
    list_button?: Types.ListButton[]
  ) => {
    try {
      const _req = await sendMessage(
        {
          msdn,
          message,
          list_button: list_button ?? undefined,
        },
        token
      );
      if (_req.code !== 200) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };

  return {
    request,
  };
};

export default useWhatsapp;
