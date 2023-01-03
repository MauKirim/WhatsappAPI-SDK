import React from "react";
import { useWhatsapp } from "./lib";

function App() {
  const whatsapp = useWhatsapp({
    token: "xxxxxxxxxxxxxxxxxxxxxx",
  });
  const handleSendTest = () => {
    whatsapp.request("xxxxxxx", "Hello World").then((res) => {
      console.log("Status", res);
    });
  };
  return (
    <div className="App">
      <button onClick={handleSendTest}>Test</button>
    </div>
  );
}

export default App;
