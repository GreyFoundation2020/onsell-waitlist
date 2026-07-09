import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>

<App/>

<Toaster
position="top-right"
toastOptions={{
duration:3000,
style:{
background:"#0B8F7A",
color:"#fff",
borderRadius:"12px"
}
}}
/>

</React.StrictMode>
);