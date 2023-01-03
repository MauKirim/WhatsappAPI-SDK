## MauKirim - A simple whatsapp api for sending messages over whatsapp

![Version](https://img.shields.io/npm/v/maukirim-whatsapp-sdk?color=075e54)
![Last Commit](https://img.shields.io/github/last-commit/MauKirim/WhatsappAPI-SDK?color=075e54)

## Installation

```bash
$ npm install maukirim-whatsapp-sdk
```

## Usage

1. Register on [MauKirim](https://app.maukirim.com) use Promo Code `MAUKIRIM2023` to get free credits
2. Create new instance on MauKirim and pairing your whatsapp number
3. Generate your API Key on detail instance page
4. Use your API

```javascript
import {useWhatsapp} from "maukirim-whatsapp-sdk";

const whatsapp = useWhatsapp({
    token: "xxxxxxxxxxxxxxxxxxxxxx",
});

const handleSendTest = () => {
    whatsapp.request("62xxxxx", "Hello World").then((res) => {
        console.log("Status", res);
    });
};

```

## About MauKirim

Simple API for sending messages over whatsapp. No need to install whatsapp on your server. Just use our API and you can
send messages over whatsapp. With low cost and easy to use.

## Contact

- [MauKirim](https://maukirim.com)
- [Whatsapp](https://wa.me/6285792071380)
- [Email](mailto:info@maukirim.com)

