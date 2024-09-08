import { envs } from "@/utils/env";
import { Client, cacheExchange, fetchExchange } from "@urql/core";


const chadyApi = new Client({
	url: envs.CHADY_API_URL,
	fetchOptions: {
		headers: {
			"Content-Type": "application/json",
			Cookie: `${envs.CHADY_API_KEY}`,
		},
	},
	exchanges: [cacheExchange, fetchExchange],
});

export default chadyApi;
