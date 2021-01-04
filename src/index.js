import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App/App";
import "./fonts/Hind/Hind-Medium.ttf";
import "./fonts/Poppins/Poppins-Light.ttf";
import "./fonts/Poppins/Poppins-Regular.ttf";
import "./fonts/Poppins/Poppins-Medium.ttf";
import "./fonts/Poppins/Poppins-Bold.ttf";
import "./index.css";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
