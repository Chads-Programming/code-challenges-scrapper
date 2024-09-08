import { getChallenges } from "@/packages/leetcode/utils";
import { createChallenge } from "./packages/chady/utils/create-challenge";
import { createChallengeDto } from "./packages/chady/dtos/create-challenge.dto";
import { difficultyFromLeetcode } from "./packages/core/utils/difficulty-leetcode-to-chady";
import { htmlToMarkdown } from "./packages/core/utils/html-to-markdown";

async function main() {
	const challenges = await getChallenges({});

	console.log({ challenges });

	for (const challenge of challenges) {
		try {
			const parsedChallenge = createChallengeDto.parse({
				title: challenge.title,
				description: htmlToMarkdown(challenge.content),
				difficulty: difficultyFromLeetcode(challenge.difficulty),
			});
			createChallenge(parsedChallenge);
		} catch (error) {
			console.log({ error });
		}
	}
}

main();
