import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { App } from "./App";
import store from "./redux/";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<ColorModeScript />
		<Provider store={store}>
			{process.env.NODE_ENV === "development" && (
				<BrowserRouter>
					<App />
				</BrowserRouter>
			)}
			{process.env.NODE_ENV === "production" && (
				<HashRouter>
					<App />
				</HashRouter>
			)}
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
