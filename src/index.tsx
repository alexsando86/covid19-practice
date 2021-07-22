import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { App } from "./App";
import store from "./redux/";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<ColorModeScript />
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
