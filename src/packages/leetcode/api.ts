import { Client, cacheExchange, fetchExchange } from "@urql/core";

const leetcodeApi = new Client({
	url: "https://leetcode.com/graphql",
	exchanges: [cacheExchange, fetchExchange],
});

export default leetcodeApi;
