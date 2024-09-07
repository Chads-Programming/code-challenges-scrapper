import api from "../api";
import { GET_CHALLENGES_GQL } from "../queries";
import Leetcode from "../types/leetcode";

type ChallengeFilters = {
	difficulty?: "HARD" | "MEDIUM" | "EASY";
};

interface GetChallengesParams {
	categorySlug?: string;
	limit?: number;
	filters?: ChallengeFilters;
	skip?: number;
}

export async function getChallenges({
	categorySlug = "all-code-essentials",
	limit = 4,
	filters = {
		difficulty: "EASY",
	},
	skip = 0,
}: GetChallengesParams): Promise<Leetcode.ChallengeItem[]> {
	try {
		const { data } = await api.query<{
			problemsetQuestionList: Leetcode.ProblemSetQuestionList;
		}>(GET_CHALLENGES_GQL, {
			categorySlug,
			filters,
			limit,
			skip,
		});
		if (!data?.problemsetQuestionList?.questions)
			throw new Error("No challenges found");
		return data.problemsetQuestionList.questions.filter(
			(question) => !question.paidOnly,
		);
	} catch (error) {
		console.log({ error });
		return [];
	}
}
