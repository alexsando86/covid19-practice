// import { createProxyMiddleware } from "http-proxy-middleware";
const createProxyMiddleware = require("http-proxy-middleware");

module.exports = (app) => {
	app.use(
		"/openapi",
		createProxyMiddleware({
			target: "http://openapi.data.go.kr",
			changeOrigin: true,
		})
	);
};
