import { defineConfig, loadEnv } from "@medusajs/framework/utils";

// Load environment variables from .env
loadEnv(process.env.NODE_ENV || "development", process.cwd());

export default defineConfig({
	projectConfig: {
		database: {
			clientType: "postgres",
			clientUrl: process.env.DATABASE_URL,
		},
		redis: {
			url: process.env.REDIS_URL,
		},
		http: {
			storeCors: process.env.STORE_CORS || "",
			adminCors: process.env.ADMIN_CORS || "",
			authCors: process.env.AUTH_CORS || "",
			jwtSecret: process.env.JWT_SECRET || "supersecret",
			cookieSecret: process.env.COOKIE_SECRET || "supersecret",
		},
	},
	modules: [
		{
			resolve: "./src/modules/brand",
		},
		// ...any other modules
	],
});
