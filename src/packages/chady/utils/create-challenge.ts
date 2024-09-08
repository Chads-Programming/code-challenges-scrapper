import chadyApi from "../api";
import { CreateChallenge } from "../dtos/create-challenge.dto";
import { CREATE_CHALLENGE_MUTATION } from "../mutations";

export async function createChallenge(challenge: CreateChallenge) {
	try {
		const data = await chadyApi.mutation(CREATE_CHALLENGE_MUTATION, {
			data: {
				title: challenge.title,
				description: challenge.description,
				difficult: challenge.difficulty,
			},
		});
		console.log({ data });
		return data.data;
	} catch (error) {
		console.log({ error });
		return null;
	}
}
