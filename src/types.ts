export namespace Types {
  export type ListButton = {
    id: number;
    text: string;
    url: string;
  };
  export type SendMessageTypes = {
    msdn: string;
    message: string;
    list_button?: ListButton[];
  };

  export type SendMessageResponse = {
    code: number;
    data: any;
    messages: string[];
    process_id: string;
  };
}
