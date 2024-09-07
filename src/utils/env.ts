import "dotenv/config";
import z from "zod";

const envSchema = z.object({
	CHADY_API_KEY: z.string(),
	CHADY_API_URL: z.string(),
});

const { error, data } = envSchema.safeParse(process.env);

if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}

export const envs = data;
