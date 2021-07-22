const createProxyMiddleware = require("http-proxy-middleware");

module.exports = (app) => {
	app.use(
		"/api",
		createProxyMiddleware("api/", {
			target: "http://localhost:3000/",
			changeOrigin: true,
		})
	);
};
